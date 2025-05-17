import subprocess
import sys
import unittest


class CLITest(unittest.TestCase):
    def test_help(self):
        result = subprocess.run([
            sys.executable,
            'variant_annotator.py',
            '--help'
        ], capture_output=True, text=True)
        self.assertEqual(result.returncode, 0)
        self.assertIn('Annotate oncology gene variants', result.stdout)


if __name__ == '__main__':
    unittest.main()
