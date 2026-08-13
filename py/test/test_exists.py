# JojosBizarre SDK exists test

import pytest
from jojosbizarre_sdk import JojosBizarreSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = JojosBizarreSDK.test(None, None)
        assert testsdk is not None
