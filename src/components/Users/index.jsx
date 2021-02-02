import React, { useContext, useEffect } from 'react'
import Context from '../../redux/context'
import ajax from '../../ajax'

function Users() {
  const { state, dispatch } = useContext(Context)
  useEffect(() => {
    ajax('/user').then(user => {
      dispatch({ type: "setUser", user: user })
    })
  }, [])
  console.log(state);
  return (
    <div>
      <h2>个人信息</h2>
      <div>名字：{state.user ? state.user.name : ""}</div>
    </div>
  )
}

export default Users
