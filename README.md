# JojosBizarre SDK

Look up JoJo's Bizarre Adventure characters and their Stands

> TypeScript, Python, PHP, Golang, Ruby, Lua SDKs, a CLI, an interactive REPL, and an MCP server for AI agents — all generated from one OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).

## About Jojo's Bizarre API

JoJo's Bizarre API is a community-built REST API that exposes data about characters and Stands from Hirohiko Araki's manga and anime series *JoJo's Bizarre Adventure*. The service is hosted at `https://stand-by-me.herokuapp.com`.

It is aimed at fan projects, learning exercises, and tooling that needs a small, themed dataset to play with — for example, character lookup tools, quiz apps, or demo front-ends.

The SDK in this package wraps the two main resource groupings exposed by the API: characters from the series and their associated Stands.

## Try it

**TypeScript**
```bash
npm install jojos-bizarre
```

**Python**
```bash
pip install jojos-bizarre-sdk
```

**PHP**
```bash
composer require voxgig/jojos-bizarre-sdk
```

**Golang**
```bash
go get github.com/voxgig-sdk/jojos-bizarre-sdk/go
```

**Ruby**
```bash
gem install jojos-bizarre-sdk
```

**Lua**
```bash
luarocks install jojos-bizarre-sdk
```

## 30-second quickstart

### TypeScript

```ts
import { JojosBizarreSDK } from 'jojos-bizarre'

const client = new JojosBizarreSDK({})

// List all characters
const characters = await client.Character().list()
```

See the [TypeScript README](ts/README.md) for the
full guide, or scroll down for the same example in other languages.

## What's in the box

| Surface | Use it for | Path |
| --- | --- | --- |
| **SDK** (TypeScript, Python, PHP, Golang, Ruby, Lua) | App integration | `ts/` `py/` `php/` `go/` `rb/` `lua/` |
| **CLI** | Scripts, CI, ops, one-off API calls | `go-cli/` |
| **MCP server** | AI agents (Claude, Cursor, Cline) | `go-mcp/` |

## Use it from an AI agent (MCP)

The generated MCP server exposes every operation in this SDK as an
[MCP](https://modelcontextprotocol.io) tool that Claude, Cursor or Cline
can call directly. Build and register it:

```bash
cd go-mcp && go build -o jojos-bizarre-mcp .
```

Then add it to your agent's MCP config (Claude Desktop, Cursor, etc.):

```json
{
  "mcpServers": {
    "jojos-bizarre": {
      "command": "/abs/path/to/jojos-bizarre-mcp"
    }
  }
}
```

## Entities

The API exposes 2 entities:

| Entity | Description | API path |
| --- | --- | --- |
| **Character** | A person from the JoJo's Bizarre Adventure series — protagonists, antagonists, and supporting cast across the various Parts. | `/api/characters` |
| **Stand** | A Stand — the supernatural manifestation wielded by a Stand User in the series, typically linked to one or more characters. | `/api/stands` |

Each entity supports the following operations where available: **load**,
**list**, **create**, **update**, and **remove**.

## Quickstart in other languages

### Python

```python
from jojosbizarre_sdk import JojosBizarreSDK

client = JojosBizarreSDK({})

# List all characters
characters, err = client.Character(None).list(None, None)

# Load a specific character
character, err = client.Character(None).load(
    {"id": "example_id"}, None
)
```

### PHP

```php
<?php
require_once 'jojosbizarre_sdk.php';

$client = new JojosBizarreSDK([]);

// List all characters
[$characters, $err] = $client->Character(null)->list(null, null);

// Load a specific character
[$character, $err] = $client->Character(null)->load(
    ["id" => "example_id"], null
);
```

### Golang

```go
import sdk "github.com/voxgig-sdk/jojos-bizarre-sdk/go"

client := sdk.NewJojosBizarreSDK(map[string]any{})

// List all characters
characters, err := client.Character(nil).List(nil, nil)
```

### Ruby

```ruby
require_relative "JojosBizarre_sdk"

client = JojosBizarreSDK.new({})

# List all characters
characters, err = client.Character(nil).list(nil, nil)

# Load a specific character
character, err = client.Character(nil).load(
  { "id" => "example_id" }, nil
)
```

### Lua

```lua
local sdk = require("jojos-bizarre_sdk")

local client = sdk.new({})

-- List all characters
local characters, err = client:Character(nil):list(nil, nil)

-- Load a specific character
local character, err = client:Character(nil):load(
  { id = "example_id" }, nil
)
```

## Unit testing in offline mode

Every SDK ships a test mode that swaps the HTTP transport for an
in-memory mock, so unit tests run offline.

### TypeScript

```ts
const client = JojosBizarreSDK.test()
const result = await client.Character().load({ id: 'test01' })
// result.ok === true, result.data contains mock data
```

### Python

```python
client = JojosBizarreSDK.test(None, None)
result, err = client.Character(None).load(
    {"id": "test01"}, None
)
```

### PHP

```php
$client = JojosBizarreSDK::test(null, null);
[$result, $err] = $client->Character(null)->load(
    ["id" => "test01"], null
);
```

### Golang

```go
client := sdk.TestSDK(nil, nil)
result, err := client.Character(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
```

### Ruby

```ruby
client = JojosBizarreSDK.test(nil, nil)
result, err = client.Character(nil).load(
  { "id" => "test01" }, nil
)
```

### Lua

```lua
local client = sdk.test(nil, nil)
local result, err = client:Character(nil):load(
  { id = "test01" }, nil
)
```

## How it works

Every SDK call runs the same five-stage pipeline:

1. **Point** — resolve the API endpoint from the operation definition.
2. **Spec** — build the HTTP specification (URL, method, headers, body).
3. **Request** — send the HTTP request.
4. **Response** — receive and parse the response.
5. **Result** — extract the result data for the caller.

A feature hook fires at each stage (e.g. `PrePoint`, `PreSpec`,
`PreRequest`), so features can inspect or modify the pipeline without
forking the SDK.

### Features

| Feature | Purpose |
| --- | --- |
| **TestFeature** | In-memory mock transport for testing without a live server |

Pass custom features via the `extend` option at construction time.

### Direct and Prepare

For endpoints the entity model doesn't cover, use the low-level methods:

- **`direct(fetchargs)`** — build and send an HTTP request in one step.
- **`prepare(fetchargs)`** — build the request without sending it.

Both accept a map with `path`, `method`, `params`, `query`,
`headers`, and `body`. See the [How-to guides](#how-to-guides) below.

## How-to guides

### Make a direct API call

When the entity interface does not cover an endpoint, use `direct`:

**TypeScript:**
```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})
console.log(result.data)
```

**Python:**
```python
result, err = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})
```

**PHP:**
```php
[$result, $err] = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);
```

**Go:**
```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
```

**Ruby:**
```ruby
result, err = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})
```

**Lua:**
```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
```

## Per-language documentation

- [TypeScript](ts/README.md)
- [Python](py/README.md)
- [PHP](php/README.md)
- [Golang](go/README.md)
- [Ruby](rb/README.md)
- [Lua](lua/README.md)

## Using the Jojo's Bizarre API

- Upstream: [https://stand-by-me.herokuapp.com](https://stand-by-me.herokuapp.com)

---

Generated from the Jojo's Bizarre API OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).
