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
            "test": {
        "options": {
          "active": False,
        },
        "transport": "base",
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
            "short": "List of character abilities",
            "type": "`$ARRAY`",
          },
          {
            "name": "chapter",
            "short": "Chapter/Part of the series the character appears in",
            "type": "`$STRING`",
          },
          {
            "name": "id",
            "short": "Unique identifier for the character",
            "type": "`$STRING`",
          },
          {
            "format": "uri",
            "name": "image",
            "short": "URL to the character's image",
            "type": "`$STRING`",
          },
          {
            "name": "japaneseName",
            "short": "Japanese name of the character",
            "type": "`$STRING`",
          },
          {
            "name": "name",
            "short": "Name of the character",
            "type": "`$STRING`",
          },
          {
            "name": "nationality",
            "short": "Nationality of the character",
            "type": "`$STRING`",
          },
          {
            "name": "stand",
            "short": "Name of the character's stand, if applicable",
            "type": "`$STRING`",
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
                "args": {
                  "query": [
                    {
                      "example": 20,
                      "kind": "query",
                      "name": "limit",
                      "orig": "limit",
                      "type": "`$INTEGER`",
                    },
                    {
                      "kind": "query",
                      "name": "name",
                      "orig": "name",
                      "type": "`$STRING`",
                    },
                    {
                      "example": 1,
                      "kind": "query",
                      "name": "page",
                      "orig": "page",
                      "type": "`$INTEGER`",
                    },
                  ],
                },
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
                "select": {
                  "exist": [
                    "limit",
                    "name",
                    "page",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "api",
                  "characters",
                ],
              },
            ],
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "args": {
                  "params": [
                    {
                      "kind": "param",
                      "name": "id",
                      "orig": "id",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
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
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "api",
                  "characters",
                  "{id}",
                ],
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
            "short": "List of stand abilities",
            "type": "`$ARRAY`",
          },
          {
            "name": "chapter",
            "short": "Chapter/Part of the series the stand appears in",
            "type": "`$STRING`",
          },
          {
            "name": "id",
            "short": "Unique identifier for the stand",
            "type": "`$STRING`",
          },
          {
            "format": "uri",
            "name": "image",
            "short": "URL to the stand's image",
            "type": "`$STRING`",
          },
          {
            "name": "japaneseName",
            "short": "Japanese name of the stand",
            "type": "`$STRING`",
          },
          {
            "name": "name",
            "short": "Name of the stand",
            "type": "`$STRING`",
          },
          {
            "name": "type",
            "short": "Type or classification of the stand",
            "type": "`$STRING`",
          },
          {
            "name": "user",
            "short": "Name of the stand user",
            "type": "`$STRING`",
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
                "args": {
                  "query": [
                    {
                      "example": 20,
                      "kind": "query",
                      "name": "limit",
                      "orig": "limit",
                      "type": "`$INTEGER`",
                    },
                    {
                      "kind": "query",
                      "name": "name",
                      "orig": "name",
                      "type": "`$STRING`",
                    },
                    {
                      "example": 1,
                      "kind": "query",
                      "name": "page",
                      "orig": "page",
                      "type": "`$INTEGER`",
                    },
                  ],
                },
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
                "select": {
                  "exist": [
                    "limit",
                    "name",
                    "page",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "api",
                  "stands",
                ],
              },
            ],
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "args": {
                  "params": [
                    {
                      "kind": "param",
                      "name": "id",
                      "orig": "id",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
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
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "api",
                  "stands",
                  "{id}",
                ],
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
