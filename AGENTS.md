# AGENTS Instructions

This file provides guidelines for AI code assistants working on the repository.

## Testing
- Install Python requirements with `pip install -r requirements.txt`.
- Run the test suite using `python -m unittest` from the repository root.

## React Web App
- Use Node.js 20.
- If you modify files under `react_web_app/`, run `npm ci` followed by `npm run build` in that directory.

## Deployment
- Infrastructure code for AWS is located in `infra/`. Dependencies are in `infra/requirements.txt`.

## Commit Guidance
- Keep commit messages concise and descriptive.
- Ensure tests pass before committing.

