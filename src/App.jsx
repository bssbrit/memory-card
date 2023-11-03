import { useEffect, useState } from 'react'


function App() {
  const [pokemonName, setPokemon] = useState(null)
  const [pokeStats, setStats] = useState([])
   useEffect(() => {
    const getInfo = function () {fetch('https://pokeapi.co/api/v2/pokemon/?limit=10')
    .then(res => res.json())
    .then(data =>  setPokemon(data.results))
    .then(() => {
      pokemonName.forEach(element => {
        console.log(element.name)
        fetch(`${element.url}`)
        .then(res => res.json())
        .then(data => {
           setStats([...pokeStats, data])
          console.log(data)
        })
        .catch(error => console.log(error))
      });
    })
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
      <button onClick={() => console.log(pokeStats)}>stats</button>
        
       
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