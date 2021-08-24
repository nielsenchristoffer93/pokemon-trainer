export interface PokemonDetails {
    id: number;
    name: string;
    height: number;
    weight: number;
    types: Types[];
}

export interface Types {
    slot: string;
    type: Type;
}

export interface Type {
    name: string;
    url: string;
}