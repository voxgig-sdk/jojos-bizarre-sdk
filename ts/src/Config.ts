
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature,

}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
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
     test:     {
      "options": {
        "active": false
      }
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
          "short": "List of character abilities",
          "type": "`$ARRAY`"
        },
        {
          "name": "chapter",
          "short": "Chapter/Part of the series the character appears in",
          "type": "`$STRING`"
        },
        {
          "name": "id",
          "short": "Unique identifier for the character",
          "type": "`$STRING`"
        },
        {
          "name": "image",
          "short": "URL to the character's image",
          "type": "`$STRING`"
        },
        {
          "name": "japaneseName",
          "short": "Japanese name of the character",
          "type": "`$STRING`"
        },
        {
          "name": "name",
          "short": "Name of the character",
          "type": "`$STRING`"
        },
        {
          "name": "nationality",
          "short": "Nationality of the character",
          "type": "`$STRING`"
        },
        {
          "name": "stand",
          "short": "Name of the character's stand, if applicable",
          "type": "`$STRING`"
        }
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
                    "type": "`$INTEGER`"
                  },
                  {
                    "kind": "query",
                    "name": "name",
                    "orig": "name",
                    "type": "`$STRING`"
                  },
                  {
                    "example": 1,
                    "kind": "query",
                    "name": "page",
                    "orig": "page",
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/api/characters",
              "parts": [
                "api",
                "characters"
              ],
              "select": {
                "exist": [
                  "limit",
                  "name",
                  "page"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              }
            }
          ]
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
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/api/characters/{id}",
              "parts": [
                "api",
                "characters",
                "{id}"
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
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
          "short": "List of stand abilities",
          "type": "`$ARRAY`"
        },
        {
          "name": "chapter",
          "short": "Chapter/Part of the series the stand appears in",
          "type": "`$STRING`"
        },
        {
          "name": "id",
          "short": "Unique identifier for the stand",
          "type": "`$STRING`"
        },
        {
          "name": "image",
          "short": "URL to the stand's image",
          "type": "`$STRING`"
        },
        {
          "name": "japaneseName",
          "short": "Japanese name of the stand",
          "type": "`$STRING`"
        },
        {
          "name": "name",
          "short": "Name of the stand",
          "type": "`$STRING`"
        },
        {
          "name": "type",
          "short": "Type or classification of the stand",
          "type": "`$STRING`"
        },
        {
          "name": "user",
          "short": "Name of the stand user",
          "type": "`$STRING`"
        }
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
                    "type": "`$INTEGER`"
                  },
                  {
                    "kind": "query",
                    "name": "name",
                    "orig": "name",
                    "type": "`$STRING`"
                  },
                  {
                    "example": 1,
                    "kind": "query",
                    "name": "page",
                    "orig": "page",
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/api/stands",
              "parts": [
                "api",
                "stands"
              ],
              "select": {
                "exist": [
                  "limit",
                  "name",
                  "page"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              }
            }
          ]
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
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/api/stands/{id}",
              "parts": [
                "api",
                "stands",
                "{id}"
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
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
  config
}

