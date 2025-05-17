# Gene Variant Annotation Service

This site provides documentation for the microservice that exposes curated oncology variant information from CIViC. The service is designed for use in Model Context Protocol (MCP) workflows and can also be called directly.

## Getting Started

Run the tool with a gene symbol or variant ID:

```bash
python variant_annotator.py --gene TP53
```

## Updating Data

The tool queries the CIViC API each time it runs so information is always up to date with the latest curated variants and studies.


## Web Documentation

The content of this site is also compiled into a React web app using Shadcn UI under `react_web_app` and published to the `gh-pages` branch.

## Hosting on AWS

You can deploy the service to AWS Fargate using the CDK stack in `infra/`. The
deployment exposes the API through API Gateway. Configure clients such as Cursor
or Claude Desktop with the provided URL and API key to access the hosted
service.

## Related Documents

- [Product Requirements](prd.txt)
- [Task Breakdown](prd_tasks.md)
- [Model Context Protocol Integration](mcp.md)
- [Configuring in Cursor](cursor.md)

