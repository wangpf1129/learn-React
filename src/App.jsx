import React from 'react'
import useList from './hooks/useList'
function App() {
  const { list, deleteIndex } = useList()
  return (
    <div>
      <h2>小说列表</h2>
      {
        list ?
          (<ul>
            {list.map((item, index) => (
              <li key={item.id}>{item.name}
                <button onClick={() => { deleteIndex(index) }}>删除</button>
              </li>
            )
            )}
          </ul>) :
          (<span>加载中....</span>)
      }
    </div>
  )
}

export default App
