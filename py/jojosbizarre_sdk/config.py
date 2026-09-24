# JojosBizarre SDK configuration


# The sekreto plugin DEFINITIONS the model selected per feature, imported
# above by name from the modules the catalogue's active `plugin.def`
# entries declare. Handed to each feature (secrets builds its Sekreto
# with them): a provider kind not listed here is unknown to that SDK.
FEATURE_PLUGINS = {
}


_shared_config = None


def shared_config():
    """Return the process-wide config, built once on first use.

    The SDK reads the config on every request and never writes to it, so one
    instance is shared by every client rather than rebuilt per client.

    The returned dict is shared: treat it as read-only. Callers that need to
    mutate should use make_config, which always returns a fresh copy.
    """
    global _shared_config
    if _shared_config is None:
        _shared_config = make_config()
    return _shared_config


def make_config():
    """Build a fresh, fully materialised config dict.

    Every call rebuilds the whole structure, so prefer shared_config unless
    you need a private copy you intend to mutate.
    """
    return {
        "main": {
            "name": "JojosBizarre",
            "slug": "jojos-bizarre",
            "version": "0.0.1",
            "target": "py",
        },
        "feature": {
            "ratelimit": {
        "options": {
          "active": False,
          "burst": 5,
          "rate": 5,
        },
        "optspec": {
          "now": "`$FUNCTION`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "retry": {
        "options": {
          "active": False,
          "factor": 2,
          "maxDelay": 2000,
          "minDelay": 50,
          "retries": 2,
          "statuses": [
            408,
            425,
            429,
            500,
            502,
            503,
            504,
          ],
        },
        "optspec": {
          "jitter": "`$BOOLEAN`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "test": {
        "options": {
          "active": False,
        },
        "optspec": {
          "entity": "`$MAP`",
          "net": "`$MAP`",
        },
        "strict": False,
        "transport": "base",
      },
            "timeout": {
        "options": {
          "active": False,
          "ms": 30000,
        },
        "optspec": {
          "clearTimer": "`$FUNCTION`",
          "setTimer": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
        },
        "options": {
            "base": "https://stand-by-me.herokuapp.com",
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "character": {},
                "stand": {},
            },
        },
        "entity": {
      "character": {
        "fields": [
          {
            "name": "abilities",
            "title": "Abilities",
            "type": "`$ARRAY`",
            "short": "List of character abilities",
          },
          {
            "name": "chapter",
            "title": "Chapter",
            "type": "`$STRING`",
            "short": "Chapter/Part of the series the character appears in",
          },
          {
            "name": "id",
            "title": "Id",
            "type": "`$STRING`",
            "short": "Unique identifier for the character",
          },
          {
            "name": "image",
            "title": "Image",
            "type": "`$STRING`",
            "short": "URL to the character's image",
            "format": "uri",
          },
          {
            "name": "japaneseName",
            "title": "Japanese Name",
            "type": "`$STRING`",
            "short": "Japanese name of the character",
          },
          {
            "name": "name",
            "title": "Name",
            "type": "`$STRING`",
            "short": "Name of the character",
          },
          {
            "name": "nationality",
            "title": "Nationality",
            "type": "`$STRING`",
            "short": "Nationality of the character",
          },
          {
            "name": "stand",
            "title": "Stand",
            "type": "`$STRING`",
            "short": "Name of the character's stand, if applicable",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "character",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/api/characters",
                "segments": [
                  {
                    "lit": "api",
                  },
                  {
                    "lit": "characters",
                  },
                ],
                "parts": [
                  "api",
                  "characters",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "query": [
                    {
                      "name": "limit",
                      "orig": "limit",
                      "type": "`$INTEGER`",
                      "kind": "query",
                      "example": 20,
                    },
                    {
                      "name": "name",
                      "orig": "name",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "page",
                      "orig": "page",
                      "type": "`$INTEGER`",
                      "kind": "query",
                      "example": 1,
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "limit",
                    "name",
                    "page",
                  ],
                },
              },
            ],
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/api/characters/{id}",
                "segments": [
                  {
                    "lit": "api",
                  },
                  {
                    "lit": "characters",
                  },
                  {
                    "var": "id",
                  },
                ],
                "parts": [
                  "api",
                  "characters",
                  "{id}",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "params": [
                    {
                      "name": "id",
                      "orig": "id",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "stand": {
        "fields": [
          {
            "name": "abilities",
            "title": "Abilities",
            "type": "`$ARRAY`",
            "short": "List of stand abilities",
          },
          {
            "name": "chapter",
            "title": "Chapter",
            "type": "`$STRING`",
            "short": "Chapter/Part of the series the stand appears in",
          },
          {
            "name": "id",
            "title": "Id",
            "type": "`$STRING`",
            "short": "Unique identifier for the stand",
          },
          {
            "name": "image",
            "title": "Image",
            "type": "`$STRING`",
            "short": "URL to the stand's image",
            "format": "uri",
          },
          {
            "name": "japaneseName",
            "title": "Japanese Name",
            "type": "`$STRING`",
            "short": "Japanese name of the stand",
          },
          {
            "name": "name",
            "title": "Name",
            "type": "`$STRING`",
            "short": "Name of the stand",
          },
          {
            "name": "type",
            "title": "Type",
            "type": "`$STRING`",
            "short": "Type or classification of the stand",
          },
          {
            "name": "user",
            "title": "User",
            "type": "`$STRING`",
            "short": "Name of the stand user",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "stand",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/api/stands",
                "segments": [
                  {
                    "lit": "api",
                  },
                  {
                    "lit": "stands",
                  },
                ],
                "parts": [
                  "api",
                  "stands",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "query": [
                    {
                      "name": "limit",
                      "orig": "limit",
                      "type": "`$INTEGER`",
                      "kind": "query",
                      "example": 20,
                    },
                    {
                      "name": "name",
                      "orig": "name",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "page",
                      "orig": "page",
                      "type": "`$INTEGER`",
                      "kind": "query",
                      "example": 1,
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "limit",
                    "name",
                    "page",
                  ],
                },
              },
            ],
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/api/stands/{id}",
                "segments": [
                  {
                    "lit": "api",
                  },
                  {
                    "lit": "stands",
                  },
                  {
                    "var": "id",
                  },
                ],
                "parts": [
                  "api",
                  "stands",
                  "{id}",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "params": [
                    {
                      "name": "id",
                      "orig": "id",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
