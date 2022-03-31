export interface NameAndUrl {
    name: string;
    url: string;
}

export interface PokemonData extends NameAndUrl {
    image: string;
}

export interface PokemonFullData extends PokemonData {
    abilities: PokemonAbility[];
    base_experience: number;
    form: PokemonForm[];
    game_indices: PokemonGameIndex[];
    height: number;
    id: number;
    is_default: boolean;
    location_area_encounters: string;
    moves: PokemonMove[];
    order: number;
    species: NameAndUrl;
    stats: PokemonStat[];
    types: PokemonType[];
    weight: number;
}

export interface PokemonAbility {
    ability: { name: string; url: string };
    is_hidden: boolean;
    slot: number;
}

export interface PokemonForm extends NameAndUrl {}

export interface PokemonGameIndex {
    game_index: number;
    version: NameAndUrl;
}

export interface PokemonMove {
    move: NameAndUrl;
    version_group_details: {
        level_learned_at: number;
        move_learn_method: NameAndUrl;
        version_group: NameAndUrl;
    }[];
}

export interface PokemonStat {
    base_stat: number;
    effort: number;
    stat: NameAndUrl;
}

export interface PokemonType {
    slot: number;
    type: NameAndUrl;
}
