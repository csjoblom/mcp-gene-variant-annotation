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

## Running in SSE

The service can also run inside an SSE (Secure Shell Environment) session. Start
it with your CIViC API key just as you would locally:

```bash
CIVIC_API_KEY=YOUR_CIVIC_KEY python variant_service.py
```

Point Cursor or any other MCP client at the SSE server's URL (usually
`http://localhost:8000`) to use the service without hosting it on your local
machine.

## Related Documents

- [Product Requirements](prd.txt)
- [Task Breakdown](prd_tasks.md)
- [Model Context Protocol Integration](mcp.md)
- [Configuring in Cursor](cursor.md)

