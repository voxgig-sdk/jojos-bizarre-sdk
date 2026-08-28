# JojosBizarre TypeScript SDK Reference

Complete API reference for the JojosBizarre TypeScript SDK.


## JojosBizarreSDK

### Constructor

```ts
new JojosBizarreSDK(options?: object)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `object` | SDK configuration options. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `object` | Custom headers for all requests. |
| `options.feature` | `object` | Feature configuration. |
| `options.system` | `object` | System overrides (e.g. custom fetch). |


### Static Methods

#### `JojosBizarreSDK.test(testopts?, sdkopts?)`

Create a test client with mock features active.

```ts
const client = JojosBizarreSDK.test()
```

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `testopts` | `object` | Test feature options. |
| `sdkopts` | `object` | Additional SDK options merged with test defaults. |

**Returns:** `JojosBizarreSDK` instance in test mode.


### Instance Methods

#### `Character(data?: object)`

Create a new `Character` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CharacterEntity` instance.

#### `Stand(data?: object)`

Create a new `Stand` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `StandEntity` instance.

#### `options()`

Return a deep copy of the current SDK options.

**Returns:** `object`

#### `utility()`

Return a copy of the SDK utility object.

**Returns:** `object`

#### `direct(fetchargs?: object)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `GET`). |
| `fetchargs.params` | `object` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `object` | Query string parameters. |
| `fetchargs.headers` | `object` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (objects are JSON-serialized). |
| `fetchargs.ctrl` | `object` | Control options (e.g. `{ explain: true }`). |

**Returns:** `Promise<{ ok, status, headers, data } | Error>`

#### `prepare(fetchargs?: object)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `Promise<{ url, method, headers, body } | Error>`

#### `tester(testopts?, sdkopts?)`

Alias for `JojosBizarreSDK.test()`.

**Returns:** `JojosBizarreSDK` instance in test mode.


---

## CharacterEntity

```ts
const character = client.Character()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `abilities` | `any[]` | No | List of character abilities |
| `chapter` | `string` | No | Chapter/Part of the series the character appears in |
| `id` | `string` | No | Unique identifier for the character |
| `image` | `string` | No | URL to the character's image |
| `japaneseName` | `string` | No | Japanese name of the character |
| `name` | `string` | No | Name of the character |
| `nationality` | `string` | No | Nationality of the character |
| `stand` | `string` | No | Name of the character's stand, if applicable |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Character().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Character().load({ id: 'character_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CharacterEntity` instance with the same client and
options.

#### `client()`

Return the parent `JojosBizarreSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## StandEntity

```ts
const stand = client.Stand()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `abilities` | `any[]` | No | List of stand abilities |
| `chapter` | `string` | No | Chapter/Part of the series the stand appears in |
| `id` | `string` | No | Unique identifier for the stand |
| `image` | `string` | No | URL to the stand's image |
| `japaneseName` | `string` | No | Japanese name of the stand |
| `name` | `string` | No | Name of the stand |
| `type` | `string` | No | Type or classification of the stand |
| `user` | `string` | No | Name of the stand user |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Stand().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Stand().load({ id: 'stand_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `StandEntity` instance with the same client and
options.

#### `client()`

Return the parent `JojosBizarreSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```ts
const client = new JojosBizarreSDK({
  feature: {
    test: { active: true },
  }
})
```


### Configuring features

Each feature is inactive until switched on, and an SDK with no feature
configured does no feature work at all. Every option below keeps its default
unless you name it.

The array form of \`feature\` is significant: several features wrap the
transport, and the order you list them in is the order they nest.

#### `test`

In-memory mock transport for testing without a live server.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |

Options above are those the model carries a default for. A feature may
also accept callback options — a `sink` to receive each record, for
instance — which have no default and are covered in the full feature
reference.

**Usage**

Set `feature.test.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Installs the BASE transport that the wrapping features wrap, so it must be
  activated before them.
- Inactive by default: leaving it out costs nothing at runtime.

