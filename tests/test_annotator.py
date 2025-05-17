import unittest
from unittest.mock import patch, MagicMock

from variant_annotator import (
    fetch_json,
    fetch_variants_by_gene,
    fetch_variant,
    CIVIC_BASE_URL,
)


class AnnotatorTest(unittest.TestCase):
    def test_fetch_json(self):
        mock_resp = MagicMock()
        mock_resp.read.return_value = b'{"a": 1}'
        mock_resp.__enter__.return_value = mock_resp
        with patch("variant_annotator.urlopen", return_value=mock_resp) as m:
            result = fetch_json("http://example.com")
            self.assertEqual(result, {"a": 1})
            m.assert_called_with("http://example.com")

    def test_fetch_variants_by_gene(self):
        with patch("variant_annotator.fetch_json", return_value=[{"id": 1}]) as m:
            result = fetch_variants_by_gene("TP53")
            self.assertEqual(result, [{"id": 1}])
            m.assert_called_with(f"{CIVIC_BASE_URL}/genes/TP53/variants")

    def test_fetch_variant(self):
        with patch("variant_annotator.fetch_json", return_value={"id": 1}) as m:
            result = fetch_variant(1)
            self.assertEqual(result, {"id": 1})
            m.assert_called_with(f"{CIVIC_BASE_URL}/variants/1")


if __name__ == "__main__":
    unittest.main()
