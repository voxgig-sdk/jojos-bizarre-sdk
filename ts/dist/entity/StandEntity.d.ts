import { JojosBizarreEntityBase } from '../JojosBizarreEntityBase';
import type { JojosBizarreSDK } from '../JojosBizarreSDK';
import type { Control } from '../types';
import type { Stand, StandLoadMatch, StandListMatch } from '../JojosBizarreTypes';
declare class StandEntity extends JojosBizarreEntityBase<Stand> {
    constructor(client: JojosBizarreSDK, entopts: any);
    make(this: StandEntity): StandEntity;
    load(this: any, reqmatch?: StandLoadMatch, ctrl?: Control): Promise<StandEntity>;
    list(this: any, reqmatch?: StandListMatch, ctrl?: Control): Promise<StandEntity[]>;
}
export { StandEntity };
