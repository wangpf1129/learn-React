import { INCREMENT,DECREMENT} from '../constant'

export const createIncrementAction = data => ({ type: INCREMENT, data})
export const createDecrementAction = data => ({ type: DECREMENT, data})

// 处理 异步    它必须返回的是一个 函数
export const createIncrementAsyncAction = (data,time) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(createIncrementAction(data))
     },time)
   }
}