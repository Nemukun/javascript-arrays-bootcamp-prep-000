var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array,element){
  return moreArray=[element,...array];
}

function destructivelyAddElementToBeginningOfArray(array,element){
  return array.unshift(element);
}

function addElementToEndOfArray(array,element){
  return moreArray=[...array, element];
}

function destructivelyAddElementToEndOfArray(array,element){
  return array.push(element);
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

function destructivelyRemoveElementFromEndOfArray(array){
  return array.pop();
}

function removeElementFromEndOfArray(array){
  return array.slice(0,array.length-1);
}
