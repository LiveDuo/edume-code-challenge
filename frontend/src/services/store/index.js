import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'

const initialState = { words: null }

const RootReducer = (state = initialState, action) => {
  if (action.type === 'SET_WORDS') {
    return { ...state, words: action.words }
  }
  return state
}
const store = createStore(RootReducer, applyMiddleware(thunk))

export default store