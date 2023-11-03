import { useEffect, useState } from 'react'
import Pokemon from './components/Pokemon'
function App() {
  const [pokemonName, setPokemon] = useState([])
  /* 
   */
  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/?limit=10')
    .then(response => {
      const responseJson = response.json();
      return responseJson
    })
    .then(async (data) => {
      const pokemons = data.results;
      let pokemonStats = []
      for (const pokemon of pokemons) {
        pokemon.data = await fetch(pokemon.url).then((res) => res.json());
        
        pokemonStats.push(pokemon.data)
        
      }
      setPokemon(pokemonStats)
         
      
    })

   

  }, [])
  
  return (
    <div >
      <button onClick={() => console.log(pokemonName)}>poke</button>
      <Pokemon pokemonName={pokemonName}/>
    </div>
  )
}

export default App
