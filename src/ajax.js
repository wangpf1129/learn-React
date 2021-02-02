import { nanoid} from 'nanoid'

// 假的ajax   俩秒后 根据path返回一个对象，
function ajax(path) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (path === '/user') {
        resolve({
          id: nanoid(),
          name: "Wangpf"
        })
      } else if (path === '/books') {
        resolve(
          [
            {id: nanoid(),name:"小王子"},
            {id: nanoid(),name:"明朝那些事儿"},
            {id: nanoid(),name:"三体"},
          ]
        )
      }else if (path === '/movies') {
        resolve(
          [
            {id: nanoid(),name:"星际穿越"},
            {id: nanoid(),name:"返老还童"},
            {id: nanoid(),name:"盗梦空间"},
          ]
        )
       }
    },2000)
  })
}


export default ajax