#!/usr/bin/env python3
import os
import aws_cdk as cdk
from service_stack import VariantServiceStack

app = cdk.App()

civic_api_key = os.environ.get("CIVIC_API_KEY", "")

deploy_env = os.environ.get("DEPLOY_ENV", "dev")
stack_name = f"VariantServiceStack-{deploy_env}"

VariantServiceStack(app, stack_name, civic_api_key=civic_api_key)

app.synth()


