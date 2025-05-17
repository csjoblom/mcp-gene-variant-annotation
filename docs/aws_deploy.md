# Deploying to AWS

This project includes an AWS CDK stack for running the FastAPI service on ECS Fargate behind API Gateway. The stack lives in the `infra/` directory.

## Requirements
- An AWS account with permissions for ECS, ECR, and API Gateway
- Python 3.8+
- Docker installed locally

Install the CDK dependencies:

```bash
pip install -r infra/requirements.txt
```

## Manual Deployment with GitHub Actions

A workflow named **Deploy to AWS** (`.github/workflows/deploy.yml`) can deploy the stack. Trigger the workflow manually from the Actions tab and provide your CIVIC API key. The workflow expects AWS credentials (`AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`, and `AWS_REGION`) to be available as repository secrets.

The action builds a Docker image from this repository and provisions:

1. An ECS Fargate service running `variant_service.py`
2. An Application Load Balancer fronting the service
3. An API Gateway that requires an API key for access

The generated API key and endpoint URL are printed in the workflow logs as CloudFormation outputs. Use this key when configuring tools in Cursor or any other MCP client, such as Claude Desktop.

The CIVIC API key you supply is passed to the container as the `CIVIC_API_KEY` environment variable.

