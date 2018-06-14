var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(a, element) {
  return [element, ...a];
}

function destructivelyAddElementToBeginningOfArray (a, element){
  a.unshift(element);
<<<<<<< HEAD
  return a;
=======
>>>>>>> d5218acc3c0de6dea99d66dee1c8ad244abc34a0
}

function addElementToEndOfArray(a, element) {
  return [...a, element];
}

function destructivelyAddElementToEndOfArray (a, element){
  a.push(element);
<<<<<<< HEAD
  return a;
=======
>>>>>>> d5218acc3c0de6dea99d66dee1c8ad244abc34a0
}

function accessElementInArray(a, index) {
  return a[index];
}

function destructivelyRemoveElementFromBeginningOfArray(a) {
  a.shift();
<<<<<<< HEAD
  return a;
=======
>>>>>>> d5218acc3c0de6dea99d66dee1c8ad244abc34a0
}

function removeElementFromBeginningOfArray(a) {
  return a.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(a) {
  a.pop();
<<<<<<< HEAD
  return a;
=======
>>>>>>> d5218acc3c0de6dea99d66dee1c8ad244abc34a0
}

function removeElementFromEndOfArray(a) {
  return a.slice(0, a.length - 1);
}