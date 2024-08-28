import { useState } from "react";
import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";
import MOCK_DATA from "../mock";
import styled from "styled-components";

const DexContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

// function Dex() {

//   const removePokemon = (onRemove) => {
//     // {필터를 사용해서 제거기능 만들기}
//     const handleRemove = (onRemove) => {
//       const updatedPokemon = pokemon.filter((pokemon) => {
//         // if (){
//         // }
//       });
//     };
//   };

//   return (
//     <div>
//       <Dashboard
//         selectedPokemon={selectedPokemon}
//         onRemovePokemon={removePokemon}
//       />
//     </div>
//   );
// }

export default function Dex() {
  const [selectedPokemon, setSelectedPokemon] = useState([]);

  const addPokemon = (pokemon) => {
    if (selectedPokemon.includes(pokemon)) {
      alert("이미 선택된 포켓몬 입니다");
    } else {
      setSelectedPokemon([...selectedPokemon, pokemon]);
    }
  };

  return (
    <>
      <DexContainer>
        <Dashboard selectedPokemon={selectedPokemon} />
        <PokemonList pokemonList={MOCK_DATA} addPokemon={addPokemon} />
      </DexContainer>
    </>
  );
}
