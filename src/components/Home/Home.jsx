import React from "react";
import Cards from "../Cards/Cards";
import imagen from './easier.jpg'

export default function Home(props) {
  const { characters, onClose } = props;

  return (
    <div>
      <div>
         <img className="imagen" src={imagen} alt="Character" />
      </div>
      <div>
        <Cards characters={characters}
               onClose={onClose}/>
      </div>
    </div>
  );
}
