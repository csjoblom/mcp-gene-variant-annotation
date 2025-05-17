# Gene Variant Annotation Tool

This repository provides a simple command line tool to fetch cancer variant annotations from the [CIViC](https://civicdb.org/) API.
It can be used to keep oncology variant information up to date and can serve as a starting point for further automation.

## Usage

```
python variant_annotator.py --gene TP53
python variant_annotator.py --variant 1
python variant_annotator.py --gene TP53 --api-key YOUR_CIVIC_KEY
```

Set the `CIVIC_API_KEY` environment variable or pass `--api-key` to provide a
personal CIViC API key when needed. The tool prints variant IDs, names and
short descriptions retrieved from CIViC.

## GitHub Pages

This repository contains a React web application using Shadcn UI in `react_web_app`.
The GitHub Actions workflow builds the app from the Markdown files in `docs/` and
publishes the generated site to the `gh-pages` branch. The result is a hosted
site with documentation about the MCP service and instructions for configuring
it in Cursor.

## Requirements

- Python 3.8+

## Model Context Protocol Integration

The `variant_service.py` microservice can be used in a Model Context Protocol
workflow. AI models running on an MCP server can call the service's endpoints to
retrieve gene variant information. See [docs/mcp.md](docs/mcp.md) for details on
 the available tools. Configuration instructions for [Cursor](https://github.com/getcursor/cursor) are provided in [docs/cursor.md](docs/cursor.md).

To run the service locally, export your CIViC API key and start the FastAPI server:

```bash
CIVIC_API_KEY=YOUR_CIVIC_KEY python variant_service.py
```

## Running Tests

Run the test suite using Python's built-in `unittest` module:

```bash
python -m unittest
```


## AWS Deployment

A CDK stack in `infra/` can deploy the service to AWS Fargate behind API Gateway. See [docs/aws_deploy.md](docs/aws_deploy.md) for setup instructions and a GitHub Actions workflow that performs the deployment.

After deployment, note the API Gateway URL and API key printed in the workflow
logs. Configure Cursor or any other MCP client&mdash;such as Claude Desktop&mdash;
to use this URL as the tool's `base_url` and supply the API key through its
authentication settings.

