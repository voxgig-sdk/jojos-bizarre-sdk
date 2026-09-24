
import { BaseFeature } from './feature/base/BaseFeature'
import { RatelimitFeature } from './feature/ratelimit/RatelimitFeature'
import { RetryFeature } from './feature/retry/RetryFeature'
import { TestFeature } from './feature/test/TestFeature'
import { TimeoutFeature } from './feature/timeout/TimeoutFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   ratelimit: RatelimitFeature,
 retry: RetryFeature,
 test: TestFeature,
 timeout: TimeoutFeature,

}


const FEATURE_PLUGINS: Record<string, any[]> = {
  
}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    return fi
  }

  // False for a feature added at runtime via options.extend (station's
  // adopt path) - the constructor uses this to skip makeFeature for names
  // no generated class backs.
  hasFeature(this: any, fn: string) {
    return null != FEATURE_CLASS[fn]
  }


  main = {
    name: 'JojosBizarre',
        slug: "jojos-bizarre",
    version: "0.0.1",
    target: "ts",

  }


  feature = {
     ratelimit:     {
      "options": {
        "active": false,
        "burst": 5,
        "rate": 5
      },
      "optspec": {
        "now": "`$FUNCTION`",
        "sleep": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },
 retry:     {
      "options": {
        "active": false,
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
          504
        ]
      },
      "optspec": {
        "jitter": "`$BOOLEAN`",
        "sleep": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },
 test:     {
      "options": {
        "active": false
      },
      "optspec": {
        "entity": "`$MAP`",
        "net": "`$MAP`"
      },
      "strict": false,
      "transport": "base"
    },
 timeout:     {
      "options": {
        "active": false,
        "ms": 30000
      },
      "optspec": {
        "clearTimer": "`$FUNCTION`",
        "setTimer": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },

  }


  options = {
    base: "https://stand-by-me.herokuapp.com",

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
        character: {
        },
  
        stand: {
        },
  
    }
  }


  entity = {
    "character": {
      "fields": [
        {
          "name": "abilities",
          "title": "Abilities",
          "type": "`$ARRAY`",
          "short": "List of character abilities"
        },
        {
          "name": "chapter",
          "title": "Chapter",
          "type": "`$STRING`",
          "short": "Chapter/Part of the series the character appears in"
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`",
          "short": "Unique identifier for the character"
        },
        {
          "name": "image",
          "title": "Image",
          "type": "`$STRING`",
          "short": "URL to the character's image",
          "format": "uri"
        },
        {
          "name": "japaneseName",
          "title": "Japanese Name",
          "type": "`$STRING`",
          "short": "Japanese name of the character"
        },
        {
          "name": "name",
          "title": "Name",
          "type": "`$STRING`",
          "short": "Name of the character"
        },
        {
          "name": "nationality",
          "title": "Nationality",
          "type": "`$STRING`",
          "short": "Nationality of the character"
        },
        {
          "name": "stand",
          "title": "Stand",
          "type": "`$STRING`",
          "short": "Name of the character's stand, if applicable"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
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
                  "lit": "api"
                },
                {
                  "lit": "characters"
                }
              ],
              "parts": [
                "api",
                "characters"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "query": [
                  {
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`",
                    "kind": "query",
                    "example": 20
                  },
                  {
                    "name": "name",
                    "orig": "name",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "page",
                    "orig": "page",
                    "type": "`$INTEGER`",
                    "kind": "query",
                    "example": 1
                  }
                ]
              },
              "select": {
                "exist": [
                  "limit",
                  "name",
                  "page"
                ]
              }
            }
          ]
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
                  "lit": "api"
                },
                {
                  "lit": "characters"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "api",
                "characters",
                "{id}"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "stand": {
      "fields": [
        {
          "name": "abilities",
          "title": "Abilities",
          "type": "`$ARRAY`",
          "short": "List of stand abilities"
        },
        {
          "name": "chapter",
          "title": "Chapter",
          "type": "`$STRING`",
          "short": "Chapter/Part of the series the stand appears in"
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`",
          "short": "Unique identifier for the stand"
        },
        {
          "name": "image",
          "title": "Image",
          "type": "`$STRING`",
          "short": "URL to the stand's image",
          "format": "uri"
        },
        {
          "name": "japaneseName",
          "title": "Japanese Name",
          "type": "`$STRING`",
          "short": "Japanese name of the stand"
        },
        {
          "name": "name",
          "title": "Name",
          "type": "`$STRING`",
          "short": "Name of the stand"
        },
        {
          "name": "type",
          "title": "Type",
          "type": "`$STRING`",
          "short": "Type or classification of the stand"
        },
        {
          "name": "user",
          "title": "User",
          "type": "`$STRING`",
          "short": "Name of the stand user"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
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
                  "lit": "api"
                },
                {
                  "lit": "stands"
                }
              ],
              "parts": [
                "api",
                "stands"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "query": [
                  {
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`",
                    "kind": "query",
                    "example": 20
                  },
                  {
                    "name": "name",
                    "orig": "name",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "page",
                    "orig": "page",
                    "type": "`$INTEGER`",
                    "kind": "query",
                    "example": 1
                  }
                ]
              },
              "select": {
                "exist": [
                  "limit",
                  "name",
                  "page"
                ]
              }
            }
          ]
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
                  "lit": "api"
                },
                {
                  "lit": "stands"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "api",
                "stands",
                "{id}"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    }
  }
}


const config = new Config()

export {
  config,
  FEATURE_PLUGINS,
}

