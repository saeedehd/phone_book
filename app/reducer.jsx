const reducer = (state, action) => {
  console.log(`[STATE][${action.type.toUpperCase()}]`);
  switch (action.type) {
    case "INITIAL_CONTACTS":
      return { ...state, contacts: action.payload };
    case "SET_FAVORITE":
      return { ...state, favorites: [action.payload, ...state.favorites] };
    case "DELETE_FAVORITE":
      let newArray = state.favorites.splice(action.payload, 1);
      return { ...state, favorites: newArray };
    case "CHANGE_CATEGORY":
      let newCategory = "";
      if (state.category === "Show all") {
        newCategory = "Filter favorites";
      } else {
        newCategory = "Show all";
      }
      return { ...state, category: newCategory };
    case "SET_CONTACT":
      return { ...state, contact: action.payload };
    case "SET_SEARCH":
      return { ...state, searchResult: action.payload };
    default:
      return state;
  }
};

export default reducer;
