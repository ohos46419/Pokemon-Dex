import { useState } from "react";
import Dashboard from "./components/Dashboard";
import PokemonList from "./components/PokemonList";
import MOCK_DATA from "../mock";

function Dex() {
  const [selectedPokemon, setSelectedPokemon] = useState([]);

  const addPokemon = (pokemon) => {
    // {포켓몬을 선택하는 로직}
    setSelectedPokemon([...selectedPokemon, pokemon]);
  };

  const removePokemon = (onRemove) => {
    // {필터를 사용해서 제거기능 만들기}
    const handleRemove = (onRemove) => {
      const updatedPokemon = pokemon.filter((pokemon)=>{
        if (){

        }
      })
    }
  };

  return (
    <div>
      <Dashboard
        selectedPokemon={selectedPokemon}
        onRemovePokemon={removePokemon}
      />
      <PokemonList PokemonList={MOCK_DATA} onAddPokemon={addPokemon} />
    </div>
  );
}

export default Dex;
