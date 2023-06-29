import Main from './Components/Main/Main';
import Navbar from './Components/Navbar/Navbar';
import Astros from './Components/Astros/Astros';
import {Route, Routes} from 'react-router-dom';
import './App.css'
import { useEffect } from 'react';

//Constante de login
const isLogged = true;
// Guardamos en localStorage
localStorage.setItem('login', isLogged);

//import Appbar from './Components/Appbar/Appbar'; // era para la barra de color azul

const userData = {
  name: 'Micho',
  age: '5'
}

// Link para Personas en el espacio
// Link para API NASA
// Logo / Link para Login o para ver el perfil

//const links = ['astros', 'apod', true];

const links = [
  {
    "name": 'ASTROS',
    "link": 'astros'
  },
  {
    "name": 'APOD',
    "link": 'apod'
  }
]



// Navbar ---------

// Main ---- ruta: /
// Astros --- ruta: /astros
// APOD --- ruta: /apod


function App() {
  
  useEffect(() => {
    localStorage.setItem('login', JSON.stringify(isLogged))
  }, [isLogged]);

  return (
    <>
      <Navbar 
        links={links} 
        isLogged={JSON.parse(localStorage.login)}

      />

      <Routes>
        <Route 
          path='/' 
          element={ <Main {...userData} />} 
        />
        <Route 
          path='/astros' 
          element={<Astros />} 
        />
        </Routes>
    </>
  )
}

export default App
