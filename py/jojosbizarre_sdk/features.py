# JojosBizarre SDK feature factory

from jojosbizarre_sdk.feature.base_feature import JojosBizarreBaseFeature
from jojosbizarre_sdk.feature.test_feature import JojosBizarreTestFeature


def _make_feature(name):
    features = {
        "base": lambda: JojosBizarreBaseFeature(),
        "test": lambda: JojosBizarreTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
