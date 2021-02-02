
 const reducer = (state, action) => {
  const typeMap = {
    "setUser": { ...state, user: action.user },
    "setBooks": { ...state, books: action.books },
    "setMovies": {...state,movies:action.movies}
  }
  if (action.type in typeMap) {
    return typeMap[action.type]
  } else {
    throw new Error("请检查您的type 是否正确")
  }
}

export default reducer