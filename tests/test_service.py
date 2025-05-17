import unittest
from urllib.error import HTTPError
from unittest.mock import patch

from fastapi import HTTPException

from variant_service import health, get_variants, get_variant


class ServiceTest(unittest.TestCase):
    def test_health(self):
        self.assertEqual(health(), {"status": "ok"})

    @patch("variant_service.fetch_variants_by_gene")
    def test_get_variants_success(self, mock_fetch):
        mock_fetch.return_value = [{"id": 1, "name": "Variant"}]
        result = get_variants("TP53")
        self.assertEqual(result, [{"id": 1, "name": "Variant"}])
        mock_fetch.assert_called_with("TP53")

    @patch("variant_service.fetch_variants_by_gene")
    def test_get_variants_http_error(self, mock_fetch):
        mock_fetch.side_effect = HTTPError(None, None, "not found", None, None)
        with self.assertRaises(HTTPException) as ctx:
            get_variants("TP53")
        self.assertEqual(ctx.exception.status_code, 404)
        self.assertIn("not found", str(ctx.exception.detail))

    @patch("variant_service.fetch_variant")
    def test_get_variant_success(self, mock_fetch):
        mock_fetch.return_value = {"id": 1, "name": "Variant"}
        result = get_variant(1)
        self.assertEqual(result, {"id": 1, "name": "Variant"})
        mock_fetch.assert_called_with(1)

    @patch("variant_service.fetch_variant")
    def test_get_variant_http_error(self, mock_fetch):
        mock_fetch.side_effect = HTTPError(None, None, "not found", None, None)
        with self.assertRaises(HTTPException) as ctx:
            get_variant(1)
        self.assertEqual(ctx.exception.status_code, 404)
        self.assertIn("not found", str(ctx.exception.detail))


if __name__ == "__main__":
    unittest.main()
