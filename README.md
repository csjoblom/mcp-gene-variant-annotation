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

The `docs/` directory contains a basic site that can be published with GitHub Pages to share information and instructions.

## Requirements

- Python 3.8+

