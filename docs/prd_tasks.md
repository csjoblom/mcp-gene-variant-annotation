# Task Breakdown for Variant Annotation Service

This document lists implementation tasks derived from the PRD (`prd.txt`) and expands them into actionable steps.

## 1. Gene Variant Query Endpoint
- Implement `GET /gene/{gene}` in `variant_service.py` using `fetch_variants_by_gene`.
- Validate that a gene symbol is supplied and handle empty input.
- Return a JSON array of variant objects from CIViC.
- Write unit tests covering successful queries and CIViC errors.
- Update documentation with usage examples.

## 2. Variant Details Endpoint
- Implement `GET /variant/{variant_id}` using `fetch_variant`.
- Validate the `variant_id` parameter and handle non-integer input.
- Return detailed variant information in JSON format.
- Create tests for valid and invalid IDs.
- Document example requests and responses.

## 3. Health Check Endpoint
- Provide `GET /health` that returns `{"status": "ok"}`.
- Add a test to verify the endpoint response.

## 4. Error Handling
- Translate CIViC API errors into HTTP 404 responses when data is missing.
- Log other unhandled errors and return HTTP 500.
- Unit test error scenarios for both endpoints.

## 5. Service Execution
- Ensure the service starts with `python variant_service.py` using uvicorn on port 8000.
- Add command line options for host and port if needed.
- Document how to run the service locally.

## 6. Dependencies
- Confirm `fastapi`, `uvicorn`, and `pytest` are listed in `requirements.txt`.
- Provide installation instructions in the README.

## 7. Future Enhancements
- **Authentication & Authorization**
  - Evaluate integration with token-based auth or OAuth.
  - Restrict endpoints to authenticated clients.
- **Rate Limiting**
  - Add rate-limiting middleware to protect the CIViC API.
  - Configure limits and document expected behavior.

## 8. Testing & CI
- Expand the `tests` directory with unit and integration tests for all endpoints.
- Configure a GitHub Actions workflow to run the test suite on each commit.

## 9. Documentation
- Update `docs/index.md` with endpoint descriptions.
- Link to `prd.txt` for context and keep `task_breakdown.md` up to date as features evolve.

