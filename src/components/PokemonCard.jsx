import styled from "styled-components";

const Card = styled.div`
  border: 1px solid #ddd;
  background-color: #fff;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  padding: 10px;
  cursor: pointer;
  color: black;
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

const Button = styled.button``;

// function PokemonCard({ pokemon, onAdd, onRemove, isSelected }) {
//   return (
//     <Card>
//       <img src={""} alt={""} />
//       <p>{pokemon.korean_name}</p>
//       {isSelected ? (
//         <Button
//           onClick={() => {
//             onRemove(pokemon);
//           }}
//         >
//           삭제
//         </Button>
//       ) : (
//         <Button
//           onClick={() => {
//             onAdd(pokemon);
//           }}
//         >
//           추가
//         </Button>
//       )}
//     </Card>
//   );
// }

export default function PokemonCard({ pokemon }) {
  return (
    <Card
      onClick={() => {
        addPokemon(pokemon);
      }}
    >
      <div>{pokemon.korean_name}</div>
      <img src={pokemon.img_url} />
      <div>
        <div>{pokemon.description}</div>
      </div>
    </Card>
  );
}
