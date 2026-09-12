import { Context } from './Context';
declare class JojosBizarreError extends Error {
    isJojosBizarreError: boolean;
    sdk: string;
    code: string;
    ctx: Context;
    status: number;
    get notFound(): boolean;
    constructor(code: string, msg: string, ctx: Context);
}
export { JojosBizarreError };
