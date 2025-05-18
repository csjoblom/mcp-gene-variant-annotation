export const prd = `Product Requirements Document - Gene Variant Annotation MCP Service
-------------------------------------------------------------------

Overview:
This service exposes the existing variant annotation functionality as a HTTP
microservice. It communicates with the open CIViC API to retrieve oncology
variant data.

Features:
1. **Gene Variant Query**
   - Endpoint: \`GET /gene/{gene}\`
   - Returns a list of variants for the provided gene symbol.
2. **Variant Details**
   - Endpoint: \`GET /variant/{variant_id}\`
   - Returns details for a specific CIViC variant ID.
3. **Health Check**
   - Endpoint: \`GET /health\`
   - Returns { "status": "ok" } when the service is running.
4. **Error Handling**
   - API returns HTTP 404 when the CIViC API reports missing data.
5. **Service Execution**
   - Starts with \`python variant_service.py\` which runs \`uvicorn\` on port 8000.

Dependencies:
- fastapi
- uvicorn

Future Enhancements:
- Authentication/authorization for access control
- Rate limiting to protect the CIViC API

The service reuses logic from \`variant_annotator.py\` and does not store any
state. It serves as an integration point for other MCP components that need
programmatic access to cancer variant information.`;

export const prdTasks = `# Task Breakdown for Variant Annotation Service

This document lists implementation tasks derived from the PRD (\`prd.txt\`) and expands them into actionable steps.

## 1. Gene Variant Query Endpoint
- Implement \`GET /gene/{gene}\` in \`variant_service.py\` using \`fetch_variants_by_gene\`.
- Validate that a gene symbol is supplied and handle empty input.
- Return a JSON array of variant objects from CIViC.
- Write unit tests covering successful queries and CIViC errors.
- Update documentation with usage examples.

## 2. Variant Details Endpoint
- Implement \`GET /variant/{variant_id}\` using \`fetch_variant\`.
- Validate the \`variant_id\` parameter and handle non-integer input.
- Return detailed variant information in JSON format.
- Create tests for valid and invalid IDs.
- Document example requests and responses.

## 3. Health Check Endpoint
- Provide \`GET /health\` that returns \`{"status": "ok"}\`.
- Add a test to verify the endpoint response.

## 4. Error Handling
- Translate CIViC API errors into HTTP 404 responses when data is missing.
- Log other unhandled errors and return HTTP 500.
- Unit test error scenarios for both endpoints.

## 5. Service Execution
- Ensure the service starts with \`python variant_service.py\` using uvicorn on port 8000.
- Add command line options for host and port if needed.
- Document how to run the service locally.

## 6. Dependencies
- Confirm \`fastapi\` and \`uvicorn\` are listed in \`requirements.txt\`.
- Provide installation instructions in the README.

## 7. Future Enhancements
- **Authentication & Authorization**
  - Evaluate integration with token-based auth or OAuth.
  - Restrict endpoints to authenticated clients.
- **Rate Limiting**
  - Add rate-limiting middleware to protect the CIViC API.
  - Configure limits and document expected behavior.

## 8. Testing & CI
- Expand the \`tests\` directory with unit and integration tests for all endpoints.
- Configure a GitHub Actions workflow to run the test suite on each commit.

## 9. Documentation
- Update \`docs/index.md\` with endpoint descriptions.
- Link to \`prd.txt\` for context and keep \`task_breakdown.md\` up to date as features evolve.`;

export const mcp = `# Model Context Protocol Integration

This document describes how the gene variant annotation service can be used within a Model Context Protocol (MCP) workflow. The goal is to expose gene variant information to AI models through a simple set of tools.

## Available Tools

- \`get_gene_variants(gene_symbol: str)\`
  - Calls \`GET /gene/{gene}\` to retrieve all variants for the specified gene symbol.
- \`get_variant_details(variant_id: int)\`
  - Calls \`GET /variant/{variant_id}\` to return detailed information for a CIViC variant.
- \`health_check()\`
  - Calls \`GET /health\` to confirm the service is reachable.

These tools allow an MCP server to fetch curated variant data from CIViC or other sources and supply it to a downstream model. They focus exclusively on gene variant queries so that the AI can reason about oncology variants without direct network access.

## Example Workflow

1. An MCP server receives a user question about a gene.
2. It invokes \`get_gene_variants\` to gather variant candidates.
3. Optionally store the results in a vector database for later retrieval.
4. When a particular variant is referenced, call \`get_variant_details\`.
5. The MCP passes the information to an AI model hosted on AWS Bedrock to generate a response.`;

export const cursorConfig = `# Configuring the Service in Cursor

To call the gene variant service from [Cursor](https://github.com/getcursor/cursor), add an HTTP tool entry pointing to your running instance.

1. Start the service locally:
\`\`\`bash
python variant_service.py
\`\`\`

   The same command can be run inside an SSE (Secure Shell Environment) session
   if you prefer not to host the service on your machine. Cursor only needs the
   URL of the running server, typically \`http://localhost:8000\`.

2. Update \`cursor.json\` with the tool configuration:
\`\`\`json
{
  "tools": [
{ "name": "variant_service", "base_url": "http://localhost:8000" }
  ]
}
\`\`\`

Restart Cursor after saving the file. You can then invoke the service from your MCP workflows.

If you have deployed the service to AWS, replace \`http://localhost:8000\` in the example above with the API Gateway URL output during deployment. Provide the API key using your client's authentication settings. This same approach works for other MCP clients, such as Claude Desktop.`;
