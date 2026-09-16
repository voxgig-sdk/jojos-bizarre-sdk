

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { JojosBizarreSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
loadEnvLocal(__dirname + '/../../../.env.local')


describe('StandEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when JOJOS_BIZARRE_TEST_LIVE=TRUE.
  afterEach(liveDelay('JOJOS_BIZARRE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = JojosBizarreSDK.test()
    const ent = testsdk.Stand()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.JOJOS_BIZARRE_TEST_LIVE
    for (const op of ['list', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'stand.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"abilities","req":false,"short":"List of stand abilities","type":"`$ARRAY`","index$":0},{"active":true,"name":"chapter","req":false,"short":"Chapter/Part of the series the stand appears in","type":"`$STRING`","index$":1},{"active":true,"name":"id","req":false,"short":"Unique identifier for the stand","type":"`$STRING`","index$":2},{"active":true,"format":"uri","name":"image","req":false,"short":"URL to the stand's image","type":"`$STRING`","index$":3},{"active":true,"name":"japaneseName","req":false,"short":"Japanese name of the stand","type":"`$STRING`","index$":4},{"active":true,"name":"name","req":false,"short":"Name of the stand","type":"`$STRING`","index$":5},{"active":true,"name":"type","req":false,"short":"Type or classification of the stand","type":"`$STRING`","index$":6},{"active":true,"name":"user","req":false,"short":"Name of the stand user","type":"`$STRING`","index$":7}],"id":{"field":"id","name":"id"},"name":"stand","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{"query":[{"active":true,"example":20,"kind":"query","name":"limit","orig":"limit","reqd":false,"type":"`$INTEGER`","index$":0},{"active":true,"kind":"query","name":"name","orig":"name","reqd":false,"type":"`$STRING`","index$":1},{"active":true,"example":1,"kind":"query","name":"page","orig":"page","reqd":false,"type":"`$INTEGER`","index$":2}]},"contract":{"id":"GET /api/stands","json":"{\"operationId\":\"getAllStands\",\"parameters\":[{\"description\":\"Page number for pagination\",\"in\":\"query\",\"name\":\"page\",\"required\":false,\"schema\":{\"default\":1,\"minimum\":1,\"type\":\"integer\"}},{\"description\":\"Number of results per page\",\"in\":\"query\",\"name\":\"limit\",\"required\":false,\"schema\":{\"default\":20,\"maximum\":100,\"minimum\":1,\"type\":\"integer\"}},{\"description\":\"Filter stands by name\",\"in\":\"query\",\"name\":\"name\",\"required\":false,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"items\":{\"properties\":{\"abilities\":{\"description\":\"List of stand abilities\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"chapter\":{\"description\":\"Chapter/Part of the series the stand appears in\",\"type\":\"string\"},\"id\":{\"description\":\"Unique identifier for the stand\",\"type\":\"string\"},\"image\":{\"description\":\"URL to the stand's image\",\"format\":\"uri\",\"type\":\"string\"},\"japaneseName\":{\"description\":\"Japanese name of the stand\",\"type\":\"string\"},\"name\":{\"description\":\"Name of the stand\",\"type\":\"string\"},\"type\":{\"description\":\"Type or classification of the stand\",\"type\":\"string\"},\"user\":{\"description\":\"Name of the stand user\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"}}},\"description\":\"Successful response with list of stands\"},\"400\":{\"description\":\"Bad request\"},\"500\":{\"description\":\"Internal server error\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/api/stands","segments":[{"lit":"api"},{"lit":"stands"}],"select":{"exist":["limit","name","page"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"GET /api/stands/{id}","json":"{\"operationId\":\"getStandById\",\"parameters\":[{\"description\":\"Unique identifier of the stand\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"abilities\":{\"description\":\"List of stand abilities\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"chapter\":{\"description\":\"Chapter/Part of the series the stand appears in\",\"type\":\"string\"},\"id\":{\"description\":\"Unique identifier for the stand\",\"type\":\"string\"},\"image\":{\"description\":\"URL to the stand's image\",\"format\":\"uri\",\"type\":\"string\"},\"japaneseName\":{\"description\":\"Japanese name of the stand\",\"type\":\"string\"},\"name\":{\"description\":\"Name of the stand\",\"type\":\"string\"},\"type\":{\"description\":\"Type or classification of the stand\",\"type\":\"string\"},\"user\":{\"description\":\"Name of the stand user\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Successful response with stand details\"},\"404\":{\"description\":\"Stand not found\"},\"500\":{\"description\":\"Internal server error\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/api/stands/{id}","segments":[{"lit":"api"},{"lit":"stands"},{"var":"id"}],"select":{"exist":["id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"stand","name__orig":"stand","Name":"Stand","name_":"stand","name-":"stand","NAME":"STAND","index$":1}, {"active":true,"entity":"stand","key$":"BasicStandFlow","kind":"basic","name":"BasicStandFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"stand_ref01"}}],"index$":0},{"active":true,"data":{},"input":{"ref":"stand_ref01","srcdatavar":"stand_ref01_data","suffix":"_dt0"},"match":{"id":"stand01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-stand_ref01"}}],"index$":1}]}, 'Stand')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let stand_ref01_data = Object.values(setup.data.existing.stand)[0] as any

    // LIST
    const stand_ref01_ent = client.Stand()
    const stand_ref01_match: any = {}

    const stand_ref01_list = (await stand_ref01_ent.list(stand_ref01_match)).map((e: any) => e.data())


    // LOAD
    const stand_ref01_match_dt0: any = {}
    stand_ref01_match_dt0.id = stand_ref01_data.id
    const stand_ref01_data_dt0 = (await stand_ref01_ent.load(stand_ref01_match_dt0)).data()
    assert(stand_ref01_data_dt0.id === stand_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/stand/StandTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = JojosBizarreSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['stand01','stand02','stand03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'JOJOS_BIZARRE_TEST_STAND_ENTID': idmap,
    'JOJOS_BIZARRE_TEST_LIVE': 'FALSE',
    'JOJOS_BIZARRE_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['JOJOS_BIZARRE_TEST_STAND_ENTID']

  const live = 'TRUE' === env.JOJOS_BIZARRE_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['JOJOS_BIZARRE_TEST_STAND_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new JojosBizarreSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.JOJOS_BIZARRE_TEST_EXPLAIN,
    live,
    transport,
    now: Date.now(),
  }

  return setup
}
  
