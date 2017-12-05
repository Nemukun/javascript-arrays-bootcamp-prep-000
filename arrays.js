var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array,element){
  return array.unshift(element);
}

function destructivelyAddElementToBeginningOfArray(array,element){
  return moreArray=[element,...array];
}

function addElementToEndOfArray(array,element){
  return array.push(element);
}

function destructivelyAddElementToEndOfArray(array,element){
  return moreArray=[...array, element];
}

function accessElementInArray(array, index){
  return array[index];
}

function destrutivelyRemoveElementFromBeginningOfArray(array){
  return array.shift();
}

function removeElementFromBeginningOfArray(array){
  return array.slice(1);
}
