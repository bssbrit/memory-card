import PropTypes from 'prop-types';
const Pokemon = ({pokemonName}) => {
  return (
    <div className='pokePhotos'>
      {pokemonName.map(poke => (
        
        <div key={poke.name}>
          <img src={poke.sprites.front_default} alt="" />
          <p style={{
            textTransform:'uppercase'
          }}>{poke.name}</p>
        </div>
      ))}
    </div>
  )
}

Pokemon.propTypes = {
  pokemonName: PropTypes.array,
};

export default Pokemon
