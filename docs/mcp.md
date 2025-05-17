# Model Context Protocol Integration

This document describes how the gene variant annotation service can be used within a Model Context Protocol (MCP) workflow. The goal is to expose gene variant information to AI models through a simple set of tools.

## Available Tools

- `get_gene_variants(gene_symbol: str)`
  - Calls `GET /gene/{gene}` to retrieve all variants for the specified gene symbol.
- `get_variant_details(variant_id: int)`
  - Calls `GET /variant/{variant_id}` to return detailed information for a CIViC variant.
- `health_check()`
  - Calls `GET /health` to confirm the service is reachable.

These tools allow an MCP server to fetch curated variant data from CIViC or other sources and supply it to a downstream model. They focus exclusively on gene variant queries so that the AI can reason about oncology variants without direct network access.

## Example Workflow

1. An MCP server receives a user question about a gene.
2. It invokes `get_gene_variants` to gather variant candidates.
3. Optionally store the results in a vector database for later retrieval.
4. When a particular variant is referenced, call `get_variant_details`.
5. The MCP passes the information to an AI model hosted on AWS Bedrock to generate a response.

