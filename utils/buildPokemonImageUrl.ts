export const buildPokemonImageUrl = (pokemonId: number) => {
    const paddedIndex = String(pokemonId).padStart(3, "0");

    return `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${paddedIndex}.png`;
};
