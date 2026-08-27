# JojosBizarre SDK configuration


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
                "parts": [
                  "api",
                  "characters",
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
                "parts": [
                  "api",
                  "characters",
                  "{id}",
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
                "parts": [
                  "api",
                  "stands",
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
                "parts": [
                  "api",
                  "stands",
                  "{id}",
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
