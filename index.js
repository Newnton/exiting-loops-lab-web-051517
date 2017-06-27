function breakOut(array, changeValue, stopValue){
  for (let i = 0; i < array.length; i++){
    if(array[i] === stopValue){return array}
    else {array[i] = changeValue}
  }
}

function keepGoing(array, changeValue, skipValue){
  for (let i = 0; i < array.length; i++){
    if(array[i] === skipValue){continue}
    array[i] = changeValue
  }
  return array
}

function findBy(array, findFn){
  let ret = null
  for (let i = 0; i < array.length; i++){
    if (findFn(array[i])){ret = array[i]}
  }
  return ret
}
