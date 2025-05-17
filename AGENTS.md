# AGENTS Instructions

This file provides guidelines for AI code assistants working on the repository.

## Testing
- Install Python requirements with `pip install -r requirements.txt`.
- Run the test suite using `python -m unittest` from the repository root.

## React Web App
- Use Node.js 20.
- The Codex environment has no access to the npm registry. If you modify files in `react_web_app/`, do not run `npm ci`, `npm run build`, or any React tests. The CI pipeline handles building the app and managing lock files.

## Deployment
- Infrastructure code for AWS is located in `infra/`. Dependencies are in `infra/requirements.txt`.

## Commit Guidance
- Keep commit messages concise and descriptive.
- Ensure tests pass before committing.

