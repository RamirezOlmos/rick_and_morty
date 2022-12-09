import { useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import styles from './Card.module.css';
import { connect } from "react-redux";
import { addFavorite, deleteFavorite } from "../../redux/actions.js";

export function Card(props) {
  const {name, species, gender, image, onClose, idx, 
         id, addFavorite, deleteFavorite, allCharacters} = props;

  const [isFav, setIsFav] = useState(false);

  const handleFavorite = () => {
      if(isFav){
          setIsFav(false);
          deleteFavorite(id);
      }

      if(!isFav){
          setIsFav(true);
          addFavorite(props);
      }
  };

  useEffect(() => {
       allCharacters.forEach((fav) => {
          if(fav.id === props.id) {
             setIsFav(true);
          }
       });
  }, [allCharacters]);

   return (
      <div className={styles.Card} key={idx}>
        {
           isFav ? (
              <button onClick={handleFavorite}>❤️</button>
           ) : (
              <button onClick={handleFavorite}>🤍</button>
           )
        }
         <button onClick={onClose}
                 value={id}>
          X              
         </button>
        <Link to={`/detail/${id}`}>
          <p className="card-title">{name}</p>
        </Link>
         <img src={image} alt="Character"  />
         <p>{species}</p>
         <p>{gender}</p>
      </div>
   );
}

export function mapStateToProps(state){
    return {
        allCharacters: state.allCharacters 
  }
}

export const mapDispatchToProps = (dispatch) => {
    return{
        addFavorite: (character) => dispatch(addFavorite(character)),
        deleteFavorite: (id) => dispatch(deleteFavorite(id)),
        
    }
};

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(Card);
