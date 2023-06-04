// This is the array that contains numbers for you to work with
var myArray = [1, 2, 5, 6, 12, 23, 15, 31];

// This array should only contain even numbers
var evenArray = [];

// This code will call your function when the page loads up
// Don't edit this function!
window.onload = () => {
  console.log(filterArray(myArray, isEvenCallBack));
};

function filterArray(myArray, isEvenCallBack) {
  myArray.forEach((idx) => {if (isEvenCallBack(idx)) { evenArray.push(idx); }});
  return evenArray;
}

// This function should return 'true' if a number is even and 'false' if a number is odd
function isEvenCallBack(number) {
  // TODO: use the mod operator (%) to determine if number is even or odd
  let mod = number % 2;
  if (mod) {
    return false;
  } else {
    return true;
  }
}