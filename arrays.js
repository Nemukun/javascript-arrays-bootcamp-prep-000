var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array,element){
  var array=[];
  return array.unshift(element);
}

function destructivelyAddElementToBeginningOfArray(array,element){
   var array=[];
  return moreArray=[element,...array];
}

function addElementToEndOfArray(array,element){
   var array=[];
  return array.push(element);
}

function destructivelyAddElementToEndOfArray(array,element){
   var array=[];
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

function destructivelyRemoveElementFromEndOfArray(array){
  return array.pop();
}

function removeElementFromEndOfArray(array){
  return array.slice(0,array.length-1);
}
