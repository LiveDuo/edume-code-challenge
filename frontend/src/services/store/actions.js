const setWords = (nums) => {
  return async (dispatch) => {
    const response = await fetch(`/v1/t9/calculate?nums=${nums}&filtered=true`)
    const data = await response.json()
    dispatch({type: 'SET_WORDS', words: data})
  }
}
export { setWords }