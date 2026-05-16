# JojosBizarre SDK utility: make_context

from core.context import JojosBizarreContext


def make_context_util(ctxmap, basectx):
    return JojosBizarreContext(ctxmap, basectx)
