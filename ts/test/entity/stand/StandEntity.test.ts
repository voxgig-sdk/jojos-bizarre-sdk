

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
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"abilities":{"a":true,"h":"Abilities","n":"abilities","r":false,"sh":"List of stand abilities","t":"`$ARRAY`","key$":"abilities","index$":0},"chapter":{"a":true,"h":"Chapter","n":"chapter","r":false,"sh":"Chapter/Part of the series the stand appears in","t":"`$STRING`","key$":"chapter","index$":1},"id":{"a":true,"h":"Id","n":"id","r":false,"sh":"Unique identifier for the stand","t":"`$STRING`","key$":"id","index$":2},"image":{"a":true,"fo":"uri","h":"Image","n":"image","r":false,"sh":"URL to the stand's image","t":"`$STRING`","key$":"image","index$":3},"japaneseName":{"a":true,"h":"Japanese Name","n":"japaneseName","r":false,"sh":"Japanese name of the stand","t":"`$STRING`","key$":"japaneseName","index$":4},"name":{"a":true,"h":"Name","n":"name","r":false,"sh":"Name of the stand","t":"`$STRING`","key$":"name","index$":5},"type":{"a":true,"h":"Type","n":"type","r":false,"sh":"Type or classification of the stand","t":"`$STRING`","key$":"type","index$":6},"user":{"a":true,"h":"User","n":"user","r":false,"sh":"Name of the stand user","t":"`$STRING`","key$":"user","index$":7}},"id":{"field":"id","name":"id"},"name":"stand","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /api/stands","source":"openapi3","version":2},"g":{"query":[{"a":true,"ex":20,"k":"query","n":"limit","or":"limit","r":false,"t":"`$INTEGER`","index$":0},{"a":true,"k":"query","n":"name","or":"name","r":false,"t":"`$STRING`","index$":1},{"a":true,"ex":1,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":2}]},"k":"http","m":"GET","o":"/api/stands","q":{"exist":["limit","name","page"]},"r":{},"s":[{"lit":"api"},{"lit":"stands"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /api/stands/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/api/stands/{id}","q":{"exist":["id"]},"r":{},"s":[{"lit":"api"},{"lit":"stands"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"stand","name__orig":"stand","Name":"Stand","name_":"stand","name-":"stand","NAME":"STAND","index$":1}, {"active":true,"entity":"stand","key$":"BasicStandFlow","kind":"basic","name":"BasicStandFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"stand_ref01"}}],"index$":0},{"a":true,"d":{},"i":{"ref":"stand_ref01","srcdatavar":"stand_ref01_data","suffix":"_dt0"},"m":{"id":"stand01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-stand_ref01"}}],"index$":1}]}, 'Stand', {"GET /api/stands":{"protocol":"http","operationId":"getAllStands","responses":{"200":{"description":"Successful response with list of stands","content":{"application/json":{"schema":{"type":"array","items":{"type":"object","properties":{"id":{"type":"string","description":"Unique identifier for the stand","key$":"id"},"name":{"type":"string","description":"Name of the stand","key$":"name"},"japaneseName":{"type":"string","description":"Japanese name of the stand","key$":"japaneseName"},"image":{"type":"string","format":"uri","description":"URL to the stand's image","key$":"image"},"chapter":{"type":"string","description":"Chapter/Part of the series the stand appears in","key$":"chapter"},"user":{"type":"string","description":"Name of the stand user","key$":"user"},"abilities":{"type":"array","items":{"type":"string"},"description":"List of stand abilities","key$":"abilities"},"type":{"type":"string","description":"Type or classification of the stand","key$":"type"}},"x-ref":"#/components/schemas/Stand","index$":0}}}}},"400":{"description":"Bad request"},"500":{"description":"Internal server error"}},"parameters":[{"name":"page","in":"query","description":"Page number for pagination","required":false,"schema":{"type":"integer","minimum":1,"default":1},"index$":0},{"name":"limit","in":"query","description":"Number of results per page","required":false,"schema":{"type":"integer","minimum":1,"maximum":100,"default":20},"index$":1},{"name":"name","in":"query","description":"Filter stands by name","required":false,"schema":{"type":"string"},"index$":2}],"securitySource":"unspecified"},"GET /api/stands/{id}":{"protocol":"http","operationId":"getStandById","responses":{"200":{"description":"Successful response with stand details","content":{"application/json":{"schema":{"type":"object","properties":{"id":{"type":"string","description":"Unique identifier for the stand","key$":"id"},"name":{"type":"string","description":"Name of the stand","key$":"name"},"japaneseName":{"type":"string","description":"Japanese name of the stand","key$":"japaneseName"},"image":{"type":"string","format":"uri","description":"URL to the stand's image","key$":"image"},"chapter":{"type":"string","description":"Chapter/Part of the series the stand appears in","key$":"chapter"},"user":{"type":"string","description":"Name of the stand user","key$":"user"},"abilities":{"type":"array","items":{"type":"string"},"description":"List of stand abilities","key$":"abilities"},"type":{"type":"string","description":"Type or classification of the stand","key$":"type"}},"x-ref":"#/components/schemas/Stand","index$":0}}}},"404":{"description":"Stand not found"},"500":{"description":"Internal server error"}},"parameters":[{"name":"id","in":"path","description":"Unique identifier of the stand","required":true,"schema":{"type":"string"},"index$":0}],"securitySource":"unspecified"}})
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
  
