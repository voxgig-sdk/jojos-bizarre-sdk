export interface Character {
    abilities?: any[];
    chapter?: string;
    id?: string;
    image?: string;
    japaneseName?: string;
    name?: string;
    nationality?: string;
    stand?: string;
}
export interface CharacterLoadMatch {
    id: string;
}
export interface CharacterListMatch {
    limit?: number;
    name?: string;
    page?: number;
}
export interface Stand {
    abilities?: any[];
    chapter?: string;
    id?: string;
    image?: string;
    japaneseName?: string;
    name?: string;
    type?: string;
    user?: string;
}
export interface StandLoadMatch {
    id: string;
}
export interface StandListMatch {
    limit?: number;
    name?: string;
    page?: number;
}
