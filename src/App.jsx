import { useEffect, useState } from 'react'


function App() {
  const [pokemonName, setPokemon] = useState([])
  let counter = 0
   useEffect(() => {
    const getInfo = function () {fetch('https://pokeapi.co/api/v2/pokemon/?limit=10')
    .then(res => res.json())
    .then(json =>  fetch(`${json.results[0].url}`)
    .then(response => response.json())
    .then(data => setPokemon(oldArray => [...oldArray, data])) 
      )
    .catch(error => console.log(error))
    }
    getInfo()
    return () => {
      clearInterval(getInfo);
    }
  

  }, [])
  
  return (
    <div >
      <button onClick={() => console.log(pokemonName)}>poke</button>
     {pokemonName.map(poke => (
        <p key={poke.name}>{poke.name}</p>
      ))
        
      } 
    </div>
  )
}

export default App
/* const [pokemonName, setPokemon] = useState([])
  
   useEffect(() => {
    const getInfo = function () {fetch('https://pokeapi.co/api/v2/pokemon/?limit=10')
    .then(res => res.json())
    .then(json => fetch(`${json.results[0].url}`)
    .then(response => response.json())
    .then(data => setPokemon(oldArray => [...oldArray, data])) 
      )
    .catch(error => console.log(error))
    }
    getInfo()
    return () => {
      clearInterval(getInfo);
    }
  

  }, [])
   */