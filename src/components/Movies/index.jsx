import React, { useContext, useEffect } from 'react'
import Context from '../../redux/context'
import ajax from '../../ajax'

function Movies() {
  const { state, dispatch } = useContext(Context)
  useEffect(() => {
    ajax('/movies').then(movies => {
      dispatch({ type: "setMovies", movies: movies })
    })
  }, [])
  return (
    <div>
      <h2>我的电影</h2>
      <ul>
        {state.movies ?
          state.movies.map((movie) => {
            return <li key={movie.id}>{movie.name}</li>
          }) :
          "加载中..."
        }
      </ul>
    </div>
  )
}

export default Movies
