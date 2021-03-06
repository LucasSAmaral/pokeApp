import { getPokemonName, getPokemonImage } from "../whoIsThatPokemon.selector";

describe("Should test selectors", () => {
  const mockedResponse = {
    pokemon: {
      pokemonName: "Pikachu",
      pokemonImage:
        "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png"
    },
    whoIsThatPokemon: {}
  };

  it("should get pokémon name", () => {
    expect(getPokemonName(mockedResponse)).toEqual("Pikachu");
  });

  it("should get pokémon image", () => {
    expect(getPokemonImage(mockedResponse)).toEqual(
      "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png"
    );
  });
});
