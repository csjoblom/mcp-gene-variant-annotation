import argparse
import json
import os
from urllib.request import urlopen, Request
from urllib.error import HTTPError
from typing import List, Dict

CIVIC_BASE_URL = "https://civicdb.org/api"  # open API for cancer variants
CIVIC_API_KEY_ENV = "CIVIC_API_KEY"


def fetch_json(url: str):
    """Fetch JSON data from a URL, using an API key if provided."""
    api_key = os.environ.get(CIVIC_API_KEY_ENV)
    request = url if not api_key else Request(url, headers={"X-API-KEY": api_key})
    with urlopen(request) as response:
        return json.loads(response.read().decode())


def fetch_variants_by_gene(gene: str) -> List[Dict]:
    """Fetch variants for a given gene from CIViC."""
    url = f"{CIVIC_BASE_URL}/genes/{gene}/variants"
    return fetch_json(url)


def fetch_variant(variant_id: int) -> Dict:
    """Fetch a single variant by CIViC variant ID."""
    url = f"{CIVIC_BASE_URL}/variants/{variant_id}"
    return fetch_json(url)


def main():
    parser = argparse.ArgumentParser(description="Annotate oncology gene variants using CIViC API")
    group = parser.add_mutually_exclusive_group(required=True)
    group.add_argument("--gene", help="Gene symbol to query")
    group.add_argument("--variant", type=int, help="CIViC variant ID to query")
    parser.add_argument("--api-key", help="CIViC API key", dest="api_key")
    args = parser.parse_args()

    if args.api_key:
        os.environ[CIVIC_API_KEY_ENV] = args.api_key

    try:
        if args.gene:
            variants = fetch_variants_by_gene(args.gene)
            for variant in variants:
                print(f"Variant ID: {variant['id']}")
                print(f"Name: {variant['name']}")
                print(f"Description: {variant.get('description', '')}\n")
        else:
            variant = fetch_variant(args.variant)
            print(f"Variant ID: {variant['id']}")
            print(f"Name: {variant['name']}")
            print(f"Description: {variant.get('description', '')}")
    except HTTPError as exc:
        print(f"Error fetching data: {exc}")


if __name__ == "__main__":
    main()
