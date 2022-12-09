export const ADD_FAVORITE = "ADD_FAVORITE";
export const DELETE_FAVORITE = "DELETE_FAVORITE";
export const FILTER = "FILTER";
export const ORDER = "ORDER";

const initialState = {
    myFavorites: [],
    allCharacters: []
}

const rootReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
      case ADD_FAVORITE:
          return {
              ...state,
              myFavorites: [...state.allCharacters],
              allCharacters: [...state.allCharacters, payload]
          };
      case DELETE_FAVORITE:
          const filterCharacters = state.allCharacters.filter(character => 
                                                   character.id != payload);
          return {
              ...state,
              myFavorites: [...state.allCharacters],
              allCharacters: filterCharacters
          };
      case FILTER:
          if(payload === ""){
              return {
                  ...state,
                  myFavorites: [...state.allCharacters] 
              };
          }

          const filterGender = state.allCharacters.filter(character => 
                                                   character.gender === payload);
          return {
              ...state,
              myFavorites: filterGender
          };
      case ORDER:
          if(payload === "Ascendent"){
              state.myFavorites.sort((charA, charB) => 
                                                       charA.id > charB.id);
          }

          if(payload === "Descendent"){
              state.myFavorites.sort((charA, charB) => 
                                                       charA.id < charB.id);
          }

          return {
              ...state,
              myFavorites: [...state.myFavorites] 
          };

      default:
          return { ...state };
    }
};

export default rootReducer;

