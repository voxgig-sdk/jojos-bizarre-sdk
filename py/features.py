# JojosBizarre SDK feature factory

from feature.base_feature import JojosBizarreBaseFeature
from feature.test_feature import JojosBizarreTestFeature


def _make_feature(name):
    features = {
        "base": lambda: JojosBizarreBaseFeature(),
        "test": lambda: JojosBizarreTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
