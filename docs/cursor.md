# Configuring the Service in Cursor

To call the gene variant service from [Cursor](https://github.com/getcursor/cursor), add an HTTP tool entry pointing to your running instance.

1. Start the service locally:

```bash
CIVIC_API_KEY=YOUR_CIVIC_KEY python variant_service.py
```

   The same command works in an SSE (Secure Shell Environment) session if you
   prefer not to run the service on your local machine. Cursor only needs the
   service's URL (usually `http://localhost:8000`).

2. Update `cursor.json` with the tool configuration:

```json
{
  "tools": [
{ "name": "variant_service", "base_url": "http://localhost:8000" }
  ]
}
```

Restart Cursor after saving the file. You can then invoke the service from your MCP workflows.
Ensure the `CIVIC_API_KEY` environment variable is set (or use `--api-key` when running `variant_annotator.py`) so the service can authenticate to the CIViC API when required.


If you have deployed the service to AWS, replace `http://localhost:8000` in the
example above with the API Gateway URL output during deployment. Provide the
API key using your client's authentication settings. This same approach works
for other MCP clients, such as Claude Desktop.
