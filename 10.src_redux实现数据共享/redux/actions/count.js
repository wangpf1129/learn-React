import { INCREMENT,DECREMENT} from '../constant'

export const increment = data => ({ type: INCREMENT, data})
export const decrement = data => ({ type: DECREMENT, data})

// 处理 异步    它必须返回的是一个 函数
export const incrementAsync = (data,time) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(increment(data))
     },time)
   }
}