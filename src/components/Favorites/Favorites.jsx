import { connect, useDispatch } from "react-redux";
import Card from '../Card/Card';
import { filterCards, orderCards } from "../../redux/actions.js";

export function Favorites({myFavorites}){
    
    const dispatch = useDispatch();
    
    const handleChangeGender = (event) => {
        dispatch(filterCards(event.target.value));
    };

    const handleChangeOrder = (event) => {
        dispatch(orderCards(event.target.value));
    };

    return (
      <>
        <div className="productsList">
          <select name="order" id="order-select" onChange={handleChangeOrder}
                  placeholder="Please choose order">
              <option value="Ascendent">Ascendente</option>
              <option value="Descendent">Descendente</option>
          </select>
          <select name="gender" id="gender-select" onChange={handleChangeGender}>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Genderless">Genderless</option>
              <option value="unknown">unknown</option>
          </select>

          {
              myFavorites.map((product, idx) => {
                  return(
                      <Card name={product.name}
                            price={product.price}
                            id={product.id}
                            key={idx}
                      />
                  )
              })
          }
        </div>
      </>
    );
}

export function mapStateToProps(state){
    return {
        myFavorites: state.myFavorites,
  }
}

export default connect(
    mapStateToProps, 
    null
)(Favorites);

