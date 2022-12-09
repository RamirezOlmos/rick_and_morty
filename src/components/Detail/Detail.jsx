import React from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function Detail() {
    const {id} = useParams();
    const navigate = useNavigate();
    const [character, setCharacter] = React.useState({});

    const backToHome = () => navigate("/home");

    React.useEffect(() => {
         fetch(`https://rickandmortyapi.com/api/character/${id}`)
            .then((response) => response.json())
            .then((char) => {
                 if (char.name) {
                    setCharacter(char);
                 } else {
                    window.alert('No hay personajes con ese ID');
                 }
            })
            .catch((err) => {
                 window.alert('No hay personajes con ese ID');
            });
         return setCharacter({});
    }, [id]);

    return (
        <div>
          <button className="ButtonBack"
                  onClick={()=>{backToHome()}}>
            Home
          </button>

          <div>
              <h1>{character.name}</h1>
              <img
                className="characterImage"
                src={character.image}
                alt={character.name + "picture"}
              />
              <h1>Status: {character.status}</h1>
              <h1>Species: {character.species}</h1>
              <h1>Gender: {character.gender}</h1>
              <h1>Origin: {character?.origin?.name}</h1>
         </div>
        </div>
    );
}
