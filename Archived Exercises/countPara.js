// This script will run when the page is loaded
window.onload = () => {
  let result = countWords();
  console.log(result);
};

function compareCounts(a,b) {
  if (a[1] > b[1]){
    return 1;
  } else if (a[1] < b[1]) {
    return -1;
  } else {
    return 0;
  }
}
function countWords() {
  // The text variable contains the long string of words
  let text =
    "Some of the biggest and most expensive transportation projects in the world have involved building bridges. Bridges are crucial links that carry cars, trucks and trains across bodies of water, mountain gorges or other roads. As a result, they are one of the most important aspects of civil engineering and are subject to intense scrutiny, especially when they collapse. Bridge collapses can be tragic events, leading to loss of life and serious property damage. That is why bridge engineers, designers and builders must always take their jobs very seriously. The best way for them to prevent these accidents is to understand why bridges collapse in the first place. Understanding bridge collapses can lead to major changes in the design, construction and safety of future building projects. The following are main reasons why bridges fall.";

  // TODO: add code here to remove the periods and commas and transform all words to lowercase letters
  let cleanText = text.replace(/[,.]/g, '').toLowerCase();
  // The wordArray array will contains a key value pair for words and their occurences in the text
  const wordArray = cleanText.split(" ");

  // This loop goes through the wordArray and creates the key value pair objects
  const wordCount = {};
  wordArray.forEach((item) => {
    if (wordCount[item] == null) wordCount[item] = 1;
    else {
      wordCount[item] += 1;
    }
  });

  // Turn objects into an array of arrays
  let myArray = Object.entries(wordCount);
  var bArray = myArray.sort(compareCounts,).reverse();

  // TODO: sort the arrays based on the count number and store the result in a variable called bArray

  // return the first three most common words.
  console.log(bArray.slice(0,3).toString())
  return bArray.slice(0,3);
}