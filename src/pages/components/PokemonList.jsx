import styled from "styled-components";
import PokemonCard from "./PokemonCard";

const ListContainer = styled.div``;

const PokemonList = ({ PokemonList, onAddPokemon }) => {
  return (
    <ListContainer>
      {PokemonList.map((pokemon) => (
        <PokemonCard
          key={pokemon.id}
          pokemon={pokemon}
          onAdd={onAddPokemon}
          isSelected={false}
        />
      ))}
    </ListContainer>
  );
};

export default PokemonList;
