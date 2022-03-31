export interface PokemonBaseData {
    name: string;
    url: string;
}

export interface PokemonData extends PokemonBaseData {
    image: string;
}
