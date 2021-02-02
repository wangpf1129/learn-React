import React, { useContext, useEffect } from 'react'
import Context from '../../redux/context'
import ajax from '../../ajax'

function Books() {
  const { state, dispatch } = useContext(Context)
  useEffect(() => {
    ajax('/books').then(books => {
      dispatch({ type: "setBooks", books: books })
    })
  }, [])
  return (
    <div>
      <h2>我的书籍</h2>
      <ul>
        {state.books ?
          state.books.map((book) => {
            return <li key={book.id}>{book.name}</li>
          }) :
          "加载中..."
        }
      </ul>
    </div>
  )
}

export default Books
