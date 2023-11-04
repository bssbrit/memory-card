import { useEffect, useState } from 'react'
import Pokemon from './components/Pokemon'
//import { v4 as uuid } from "uuid";
function App() {
  const [pokemonName, setPokemon] = useState([])
  
 
  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/?limit=12')
    .then(response => {
      const responseJson = response.json();
      return responseJson
    })
    .then(async (data) => {
      const pokemons = data.results;
      let pokemonStats = []
      for (const pokemon of pokemons) {
        pokemon.data = await fetch(pokemon.url).then((res) => res.json());
        pokemon.data.status = false /* Para poder identificar quais foram clicadas */
        pokemonStats.push(pokemon.data)
        
      }
      setPokemon(shuffleArray(pokemonStats))
      
    })
   
    

  }, [])
   
  const restartPokes = function () {
    console.log("hi")
    const newArr = pokemonName.map((poke) => {
      return { ...poke, status:false}
    })
    setPokemon(newArr) 
   
  }
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      // Generate a random index between 0 and i (inclusive)
      const j = Math.floor(Math.random() * (i + 1));
  
      // Swap elements at i and j
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }


  return (
    <div className='container'>
      <h1 style={{textAlign:'center'}}>Poke  Memory</h1>
      
      {/* <button onClick={() => console.log(pokemonName)}>poke</button>  */}
      <Pokemon pokemonName={pokemonName} restartPokes={restartPokes} shuffleArray={shuffleArray}/>
    </div>
  )
}

export default App
