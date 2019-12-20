const combineArrays = (array1, array2) => {
  let combos = []

  if (!array1) {
    return array2
  }

  if (!array2) {
    return array1
  }

  for(let el1 of array1) {
    for(let el2 of array2) {
      combos.push(el1 + el2)
    }
  }
  return combos
}

export { combineArrays }