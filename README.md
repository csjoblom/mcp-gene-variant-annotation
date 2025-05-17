# Gene Variant Annotation Tool

This repository provides a simple command line tool to fetch cancer variant annotations from the [CIViC](https://civicdb.org/) API.
It can be used to keep oncology variant information up to date and can serve as a starting point for further automation.

## Usage

```
python variant_annotator.py --gene TP53
python variant_annotator.py --variant 1
```

The tool prints variant IDs, names and short descriptions retrieved from CIViC.

## GitHub Pages

This repository contains a simple Flutter web application in `flutter_web_app`.
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

