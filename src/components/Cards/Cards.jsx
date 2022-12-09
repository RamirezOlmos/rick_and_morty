import React from "react";
import Card from '../Card/Card.jsx';
import styles from './Cards.module.css';

export default function Cards(props) {
    const { characters, onClose } = props;
    return (
        <div className={styles.unorderedList}>
            {
              characters.map((character, idx) => 
                            <Card name={character.name} 
                                  species={character.species}
                                  gender={character.gender}
                                  image={character.image}
                                  onClose={onClose}
                                  id={character.id}
                                  key={idx}
                            />)
            }
        </div>

   )
};
