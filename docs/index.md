# Gene Variant Annotation Tool

This site describes how to use the command line tool to fetch the latest oncology variant data from CIViC.

## Getting Started

Run the tool with a gene symbol or variant ID:

```bash
python variant_annotator.py --gene TP53
```

## Updating Data

The tool queries the CIViC API each time it runs so information is always up to date with the latest curated variants and studies.

## Web Demo

A small Flutter web demo is built from the `flutter_web_app` directory and published to GitHub Pages via the `gh-pages` branch when changes are pushed to `main`.

## Related Documents

- [Product Requirements](prd.txt)
- [Task Breakdown](prd_tasks.md)
- [Model Context Protocol Integration](mcp.md)

