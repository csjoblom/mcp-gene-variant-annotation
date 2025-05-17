# Configuring the Service in Cursor

To call the gene variant service from [Cursor](https://github.com/getcursor/cursor), add an HTTP tool entry pointing to your running instance.

1. Start the service locally:

```bash
python variant_service.py
```

2. Update `cursor.json` with the tool configuration:

```json
{
  "tools": [
{ "name": "variant_service", "base_url": "http://localhost:8000" }
  ]
}
```

Restart Cursor after saving the file. You can then invoke the service from your MCP workflows.

If you have deployed the service to AWS, replace `http://localhost:8000` in the
example above with the API Gateway URL output during deployment. Provide the
API key using your client's authentication settings. This same approach works
for other MCP clients, such as Claude Desktop.
