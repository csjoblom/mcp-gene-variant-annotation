import json
import unittest
from unittest.mock import patch

import variant_annotator
import variant_service


class MockResponse:
    def __init__(self, data):
        self.data = data

    def read(self):
        return json.dumps(self.data).encode()

    def __enter__(self):
        return self

    def __exit__(self, exc_type, exc, tb):
        pass


def mock_urlopen_factory(data):
    def _mock_urlopen(url):
        return MockResponse(data)
    return _mock_urlopen


class BackendTest(unittest.TestCase):
    def test_fetch_variants_by_gene(self):
        data = [{"id": 1, "name": "Var"}]
        with patch.object(variant_annotator, "urlopen", mock_urlopen_factory(data)):
            variants = variant_annotator.fetch_variants_by_gene("TP53")
        self.assertEqual(variants, data)

    def test_fetch_variant(self):
        data = {"id": 2, "name": "V2"}
        with patch.object(variant_annotator, "urlopen", mock_urlopen_factory(data)):
            variant = variant_annotator.fetch_variant(2)
        self.assertEqual(variant, data)

    def test_health(self):
        response = variant_service.health()
        self.assertEqual(response, {"status": "ok"})

    def test_get_variants_endpoint(self):
        data = [{"id": 3, "name": "Var3"}]
        with patch.object(variant_annotator, "urlopen", mock_urlopen_factory(data)):
            response = variant_service.get_variants("TP53")
        self.assertEqual(response, data)

    def test_get_variant_endpoint(self):
        data = {"id": 4, "name": "Var4"}
        with patch.object(variant_annotator, "urlopen", mock_urlopen_factory(data)):
            response = variant_service.get_variant(4)
        self.assertEqual(response, data)


if __name__ == "__main__":
    unittest.main()
