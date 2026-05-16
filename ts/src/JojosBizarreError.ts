
import { Context } from './Context'


class JojosBizarreError extends Error {

  isJojosBizarreError = true

  sdk = 'JojosBizarre'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  JojosBizarreError
}

