import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  static const String docText = '''
Gene Variant Annotation Service

This microservice exposes endpoints to query oncology variant data for use in Model Context Protocol (MCP) workflows.

Available endpoints:
- GET /health
- GET /gene/{gene}
- GET /variant/{variant_id}

### Configuring in Cursor

1. Start the service:
   ```bash
   python variant_service.py
   ```
2. Add an entry to your `cursor.json` configuration:
   ```json
   {
     "tools": [
       { "name": "variant_service", "base_url": "http://localhost:8000" }
     ]
   }
   ```
Restart Cursor after saving the configuration.
''';

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'MCP Service Docs',
      home: Scaffold(
        appBar: AppBar(
          title: const Text('Gene Variant Service Docs'),
        ),
        body: const SingleChildScrollView(
          padding: EdgeInsets.all(16),
          child: SelectableText(docText),
        ),
      ),
    );
  }
}
