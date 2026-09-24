

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


describe('CharacterEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when JOJOS_BIZARRE_TEST_LIVE=TRUE.
  afterEach(liveDelay('JOJOS_BIZARRE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = JojosBizarreSDK.test()
    const ent = testsdk.Character()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.JOJOS_BIZARRE_TEST_LIVE
    for (const op of ['list', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'character.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"abilities":{"a":true,"h":"Abilities","n":"abilities","r":false,"sh":"List of character abilities","t":"`$ARRAY`","key$":"abilities","index$":0},"chapter":{"a":true,"h":"Chapter","n":"chapter","r":false,"sh":"Chapter/Part of the series the character appears in","t":"`$STRING`","key$":"chapter","index$":1},"id":{"a":true,"h":"Id","n":"id","r":false,"sh":"Unique identifier for the character","t":"`$STRING`","key$":"id","index$":2},"image":{"a":true,"fo":"uri","h":"Image","n":"image","r":false,"sh":"URL to the character's image","t":"`$STRING`","key$":"image","index$":3},"japaneseName":{"a":true,"h":"Japanese Name","n":"japaneseName","r":false,"sh":"Japanese name of the character","t":"`$STRING`","key$":"japaneseName","index$":4},"name":{"a":true,"h":"Name","n":"name","r":false,"sh":"Name of the character","t":"`$STRING`","key$":"name","index$":5},"nationality":{"a":true,"h":"Nationality","n":"nationality","r":false,"sh":"Nationality of the character","t":"`$STRING`","key$":"nationality","index$":6},"stand":{"a":true,"h":"Stand","n":"stand","r":false,"sh":"Name of the character's stand, if applicable","t":"`$STRING`","key$":"stand","index$":7}},"id":{"field":"id","name":"id"},"name":"character","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /api/characters","source":"openapi3","version":2},"g":{"query":[{"a":true,"ex":20,"k":"query","n":"limit","or":"limit","r":false,"t":"`$INTEGER`","index$":0},{"a":true,"k":"query","n":"name","or":"name","r":false,"t":"`$STRING`","index$":1},{"a":true,"ex":1,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":2}]},"k":"http","m":"GET","o":"/api/characters","q":{"exist":["limit","name","page"]},"r":{},"s":[{"lit":"api"},{"lit":"characters"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /api/characters/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/api/characters/{id}","q":{"exist":["id"]},"r":{},"s":[{"lit":"api"},{"lit":"characters"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"character","name__orig":"character","Name":"Character","name_":"character","name-":"character","NAME":"CHARACTER","index$":0}, {"active":true,"entity":"character","key$":"BasicCharacterFlow","kind":"basic","name":"BasicCharacterFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"character_ref01"}}],"index$":0},{"a":true,"d":{},"i":{"ref":"character_ref01","srcdatavar":"character_ref01_data","suffix":"_dt0"},"m":{"id":"character01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-character_ref01"}}],"index$":1}]}, 'Character', {"GET /api/characters":{"protocol":"http","operationId":"getAllCharacters","responses":{"200":{"description":"Successful response with list of characters","content":{"application/json":{"schema":{"type":"array","items":{"type":"object","properties":{"id":{"type":"string","description":"Unique identifier for the character","key$":"id"},"name":{"type":"string","description":"Name of the character","key$":"name"},"japaneseName":{"type":"string","description":"Japanese name of the character","key$":"japaneseName"},"image":{"type":"string","format":"uri","description":"URL to the character's image","key$":"image"},"chapter":{"type":"string","description":"Chapter/Part of the series the character appears in","key$":"chapter"},"nationality":{"type":"string","description":"Nationality of the character","key$":"nationality"},"stand":{"type":"string","description":"Name of the character's stand, if applicable","key$":"stand"},"abilities":{"type":"array","items":{"type":"string"},"description":"List of character abilities","key$":"abilities"}},"x-ref":"#/components/schemas/Character","index$":0}}}}},"400":{"description":"Bad request"},"500":{"description":"Internal server error"}},"parameters":[{"name":"page","in":"query","description":"Page number for pagination","required":false,"schema":{"type":"integer","minimum":1,"default":1},"index$":0},{"name":"limit","in":"query","description":"Number of results per page","required":false,"schema":{"type":"integer","minimum":1,"maximum":100,"default":20},"index$":1},{"name":"name","in":"query","description":"Filter characters by name","required":false,"schema":{"type":"string"},"index$":2}],"securitySource":"unspecified"},"GET /api/characters/{id}":{"protocol":"http","operationId":"getCharacterById","responses":{"200":{"description":"Successful response with character details","content":{"application/json":{"schema":{"type":"object","properties":{"id":{"type":"string","description":"Unique identifier for the character","key$":"id"},"name":{"type":"string","description":"Name of the character","key$":"name"},"japaneseName":{"type":"string","description":"Japanese name of the character","key$":"japaneseName"},"image":{"type":"string","format":"uri","description":"URL to the character's image","key$":"image"},"chapter":{"type":"string","description":"Chapter/Part of the series the character appears in","key$":"chapter"},"nationality":{"type":"string","description":"Nationality of the character","key$":"nationality"},"stand":{"type":"string","description":"Name of the character's stand, if applicable","key$":"stand"},"abilities":{"type":"array","items":{"type":"string"},"description":"List of character abilities","key$":"abilities"}},"x-ref":"#/components/schemas/Character","index$":0}}}},"404":{"description":"Character not found"},"500":{"description":"Internal server error"}},"parameters":[{"name":"id","in":"path","description":"Unique identifier of the character","required":true,"schema":{"type":"string"},"index$":0}],"securitySource":"unspecified"}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let character_ref01_data = Object.values(setup.data.existing.character)[0] as any

    // LIST
    const character_ref01_ent = client.Character()
    const character_ref01_match: any = {}

    const character_ref01_list = (await character_ref01_ent.list(character_ref01_match)).map((e: any) => e.data())


    // LOAD
    const character_ref01_match_dt0: any = {}
    character_ref01_match_dt0.id = character_ref01_data.id
    const character_ref01_data_dt0 = (await character_ref01_ent.load(character_ref01_match_dt0)).data()
    assert(character_ref01_data_dt0.id === character_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/character/CharacterTestData.json')

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
    ['character01','character02','character03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'JOJOS_BIZARRE_TEST_CHARACTER_ENTID': idmap,
    'JOJOS_BIZARRE_TEST_LIVE': 'FALSE',
    'JOJOS_BIZARRE_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['JOJOS_BIZARRE_TEST_CHARACTER_ENTID']

  const live = 'TRUE' === env.JOJOS_BIZARRE_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['JOJOS_BIZARRE_TEST_CHARACTER_ENTID']
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
  
