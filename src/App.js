import React from 'react';
import { Routes, Route, useLocation, useNavigate} from "react-router-dom";
import './App.css'
import Navbar from './components/Navbar/Nav.jsx'
import About from './components/About/About.jsx'
import Detail from './components/Detail/Detail.jsx'
import Home from './components/Home/Home.jsx'
import Form from './components/Form/Form.jsx'
import Favorites from './components/Favorites/Favorites.jsx'
//import characters from './data.js'

function App () {
//    const example = {
//       name: 'Morty Smith',
//       species: 'Human',
//       gender: 'Male',
//       image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
//    };
    const location = useLocation();
    const navigate = useNavigate();
    const [access, setAccess] = React.useState(false);
    const username = "rickSanchez@morty.com";
    const password = "Summer!555";
    const [characters, setCharacters] = React.useState([]);
    const [inputText, setInputText] = React.useState("");

    function login(userData){
        if(userData.password === password &&
           userData.username === username){
            setAccess(true);
            navigate("/home");
        }
    }

    function logout(){
        setAccess(false);
        navigate("/");
    }

    React.useEffect(() => {
       !access && navigate('/');
    }, [access]);

    const onSearch = (character) => {
        fetch(`https://rickandmortyapi.com/api/character/${character}`)
            .then((response) => response.json())
            .then((data) => {
                 if (data.name) {
                    const filterCharacter = characters.filter(character =>
                                    character.id === data.id);
                    if(!filterCharacter.length)
                        setCharacters((oldChars) => [...oldChars, data]);
                    else
                        window.alert('Ya esta ese personaje en pantalla');
                 } else {
                    window.alert('No hay personajes con ese ID');
                 }
            });
    }

    const inputHandler = (event) => {
        setInputText(event.target.value);
    }

    const onClose = (event) => {
        const filterCards = characters.filter(character =>
                                               character.id != event.target.value);
        setCharacters(filterCards);
    }
  
  return (
    <>
    <div className='App' style={{ padding: '25px' }}>
      <div>
        {
          (() => {
              if(location.pathname !== "/") {
                  return <Navbar onSearch={onSearch} 
                          inputText={inputText}
                          inputHandler={inputHandler}
                          logout={logout}
                  />;
              }
          })()
        }

      </div>
      <Routes>
          <Route exact path="/" element={<Form login={login}/>}/>
          <Route exact path="/home" 
                 element={<Home characters={characters}
                                 onClose={onClose}/>}>
          </Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/detail/:id" element={<Detail />}></Route>
          <Route exact path="/favorites" element={<Favorites />}></Route>
      </Routes>
    </div>
    </>
  )
}

export default App
