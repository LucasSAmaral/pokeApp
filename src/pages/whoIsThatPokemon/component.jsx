import React from "react";
import Helmet from "react-helmet";
import useComponentDidMount from "../../helpers/useComponentDidMount";
import AppText from "../../assets/AppText/AppText.json";
import FeatureMainTitle from "../../components/featureTitle/featureMainTitle";
import PokeAppGame from "../../components/pokeAppGame/pokeAppGame";
import randomizePokemon from "../../helpers/randomizePokemon";
import { getWhoIsThatPokemonPageText } from "./whoIsThatPokemon.selector";
import SkipCounter from "../../components/SkipCounter/SkipCounter";
import PokeButtonRandom from "../../components/pokeButton/pokeButtonRandom";
import PokemonContainer from "../../components/pokemonContainer/pokemonContainer";
import InputContainer from "../../components/inputContainer/inputContainer";
import ContainerPokeApp from "../../components/containerPokeApp/containerPokeApp";

export default (props) => {
  const {
    TimesWithoutSkip,
    PageTitle,
    buttonLabel,
  } = getWhoIsThatPokemonPageText(AppText);
  const { whoIsThatPokemon } = props;
  const { timesWithoutSkip } = whoIsThatPokemon;

  useComponentDidMount(() => {
    randomizePokemon(props);
  });

  const { pokemonImage } = props.pokemon;
  const { status } = props.whoIsThatPokemon;

  return (
    <ContainerPokeApp>
      <Helmet title="Who Is That Pokémon?" />
      <SkipCounter text={TimesWithoutSkip} counter={timesWithoutSkip} />
      <PokeAppGame>
        <FeatureMainTitle>{PageTitle}</FeatureMainTitle>
        <PokemonContainer pokemonImage={pokemonImage} status={status} />
        <InputContainer {...props} />
        <PokeButtonRandom {...props} buttonLabel={buttonLabel} />
      </PokeAppGame>
    </ContainerPokeApp>
  );
};
