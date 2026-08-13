# JojosBizarre SDK utility: make_context

from projectname_sdk.core.context import JojosBizarreContext


def make_context_util(ctxmap, basectx):
    return JojosBizarreContext(ctxmap, basectx)
