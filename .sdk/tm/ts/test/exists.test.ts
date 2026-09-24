
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { JojosBizarreSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = JojosBizarreSDK.test()
    equal(testsdk instanceof JojosBizarreSDK, true,
      'JojosBizarreSDK.test() must return a client synchronously')
  })

})
