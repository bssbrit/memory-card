import PropTypes from 'prop-types';
import { useState } from 'react';
const Pokemon = ({pokemonName, restartPokes, shuffleArray}) => {
  const [roundCounter, setCounter] = useState(0)
  const [record, setRecord] = useState(0)
  const checkClick = function(poke) {
   
   if(poke.status){ 
    console.log("Esse botão ja foi clicado");
    shuffleArray(pokemonName)
    restartPokes()
     
    if(roundCounter > record)setRecord(roundCounter)
    setCounter(0)
  /* e dai um função de reiniciar o jogo */}
   else {
  console.log("Botão foi clicado");
  poke.status = true 
  setCounter(roundCounter + 1)
  }
  }
  return (
    <div className='pokeTabuleiro'>
      <p>Contador do round {roundCounter}</p>
      <p>Best Score {record}</p>
    <div className='pokeDiv' >
      
      {pokemonName.map(poke => (
        
        <div className='pokeCard' key={poke.name} onClick={() => checkClick(poke)}>
          <img src={poke.sprites.front_default} alt=""  />
          <p style={{
            textTransform:'uppercase'
          }}>{poke.name}</p>
        </div>
      ))}
    </div>
    </div>
  )
}

Pokemon.propTypes = {
  pokemonName: PropTypes.array,
  restartPokes: PropTypes.func,
  shuffleArray: PropTypes.func
};

export default Pokemon
