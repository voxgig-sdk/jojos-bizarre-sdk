import { JojosBizarreEntityBase } from '../JojosBizarreEntityBase';
import type { JojosBizarreSDK } from '../JojosBizarreSDK';
import type { Control } from '../types';
import type { Character, CharacterLoadMatch, CharacterListMatch } from '../JojosBizarreTypes';
declare class CharacterEntity extends JojosBizarreEntityBase<Character> {
    constructor(client: JojosBizarreSDK, entopts: any);
    make(this: CharacterEntity): CharacterEntity;
    load(this: any, reqmatch?: CharacterLoadMatch, ctrl?: Control): Promise<CharacterEntity>;
    list(this: any, reqmatch?: CharacterListMatch, ctrl?: Control): Promise<CharacterEntity[]>;
}
export { CharacterEntity };
