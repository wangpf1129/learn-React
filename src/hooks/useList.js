import { useState, useEffect } from 'react'
import {nanoid } from 'nanoid'

const useList = () => {
  const [list, setList] = useState(null)
  useEffect(() => {
    ajax().then(list => {
      setList(list)
    })
  }, [])
  return {
    list: list,
    setList: setList,
    deleteIndex: index => {
      setList(list.slice(0,index).concat(list.slice(index+1)))
    }
  }
}

export default useList

function ajax() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        {id: nanoid(),name:"小王子"},
        {id: nanoid(),name:"明朝那些事儿"},
        {id: nanoid(),name:"三体"},
      ])
    },2000)
  })
}