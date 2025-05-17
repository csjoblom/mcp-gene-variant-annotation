from aws_cdk import (
    Stack,
    CfnOutput,
    aws_ec2 as ec2,
    aws_ecs as ecs,
    aws_ecr_assets as ecr_assets,
    aws_ecs_patterns as ecs_patterns,
    aws_apigateway as apigateway,
)
from constructs import Construct


class VariantServiceStack(Stack):
    def __init__(self, scope: Construct, construct_id: str, *, civic_api_key: str = "", **kwargs) -> None:
        super().__init__(scope, construct_id, **kwargs)

        vpc = ec2.Vpc(self, "VariantVpc", max_azs=2)

        cluster = ecs.Cluster(self, "VariantCluster", vpc=vpc)

        image = ecs.ContainerImage.from_asset(".")

        fargate_service = ecs_patterns.ApplicationLoadBalancedFargateService(
            self,
            "FargateService",
            cluster=cluster,
            cpu=256,
            memory_limit_mib=512,
            desired_count=1,
            task_image_options=ecs_patterns.ApplicationLoadBalancedTaskImageOptions(
                image=image,
                container_port=8000,
                environment={"CIVIC_API_KEY": civic_api_key},
            ),
            public_load_balancer=True,
        )

        api = apigateway.RestApi(self, "VariantApi")
        integration = apigateway.HttpIntegration(
            f"http://{fargate_service.load_balancer.load_balancer_dns_name}",
            http_method="ANY",
            options=apigateway.IntegrationOptions(proxy=True),
        )
        api.root.add_proxy(any_method=True, default_integration=integration)

        api_key = api.add_api_key("VariantApiKey")
        plan = api.add_usage_plan("UsagePlan", api_key=api_key)
        plan.add_api_stage(stage=api.deployment_stage)

        CfnOutput(self, "ApiUrl", value=api.url)
        CfnOutput(self, "ApiKey", value=api_key.value)


