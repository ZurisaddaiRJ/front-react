
import imageCredencial from './img/credencial.jpg';
import imageRickmorty from './img/Rick-and-Morty-Shop-Logo.png';
import './App.css';
import { useState } from 'react';
import Characters from './components/Characters';

function App() {
  const [characters, setCharacters] = useState(null);
  const restapi =  async () => {
    const api = await fetch('https://rickandmortyapi.com/api/character')
    const characterapi = await api.json();
    setCharacters(characterapi.results);
  }

  return (
    <div className="App">
      
      <header className="App-header">
        <h1 className='title'>Rick ANd Morty</h1>
        <img src={imageRickmorty} alt="Rick-and-Morty-Shop-Logo" className='img-home'></img>
        <h1 className='nombre'>Nombre: Zurisaddai Reyes Juárez</h1>
        <h1 className='matricula'>Matrícula: zs20006762</h1>
        <h1 className='correo'>zuleyma.juarez_2002@hotmail.com</h1>
        <h1 className='carrera'>Ingenieria de software</h1>
        <h1 className='escuela'>Universidad veracruzana</h1>
        
        

        {characters ? (
          <Characters characters={characters} setCharacters={setCharacters}/>
        ) : ( 
          <>
            <button onClick={restapi} className='btn-search'>Buscar Personajes</button>
            <img src={imageCredencial} alt="credencial" className='img-cred'></img>
          </>
        )}
      </header>
    </div>
    
  );
}

export default App;
