from fastapi import FastAPI, HTTPException
from urllib.error import HTTPError

from variant_annotator import fetch_variants_by_gene, fetch_variant

app = FastAPI(title="Gene Variant Annotation Service")


@app.get("/gene/{gene}")
def get_variants(gene: str):
    """Return variants for a given gene symbol."""
    try:
        return fetch_variants_by_gene(gene)
    except HTTPError as exc:
        raise HTTPException(status_code=404, detail=str(exc))


@app.get("/variant/{variant_id}")
def get_variant(variant_id: int):
    """Return details for a specific variant id."""
    try:
        return fetch_variant(variant_id)
    except HTTPError as exc:
        raise HTTPException(status_code=404, detail=str(exc))


if __name__ == "__main__":
    import uvicorn

    uvicorn.run(app, host="0.0.0.0", port=8000)
