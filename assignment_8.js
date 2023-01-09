// Assignment 1

// Write a JavaScript function to remove the first occurrence of a given 'search string' from a string.
// Example: input =  func(“Full stack developers handle both the frontend and backend of an app or a website. It even needs to have knowledge about the database.”, “the”)   => output= “Full stack developers handle both frontend and backend of an app or a website. It even needs to have knowledge about the database.”

function removeSearch(str, searchStr) {
  let out = str.replace(searchStr + " ", "");
  return out;
}
console.log(
  removeSearch(
    "Full stack developers handle both the frontend and backend of an app or a website. It even needs to have knowledge about the database.",
    "the"
  ))

////////////////////////////

function removeSearch(str, word) {
  let position = str.search(word);
  let newStr =
    str.slice(0, position) + str.slice(position + word.length).trim();
  return newStr;
}
console.log(removeSearch(
  "Full stack developers handle both the frontend and backend of an app or a website. It even needs to have knowledge about the database.",
  "the"
));

//Assignemnt 2

// Write a JavaScript program that accepts a number as input and insert dashes (-) between each two even numbers.
// Example: input =  '025468' => output = `0 - 254 - 6 - 8'

function insertDash(str) {
    let out = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] % 2 === 0 && str[i + 1] % 2 === 0) out += str[i] + "-";
        else out += str[i];
    }
    return out;
  }
  console.log(insertDash("025468")

  //Assignment 3

  // Write a JavaScript program that accepts a string as input and swap the case of each character.
 // Example: input = 'The Quick Brown Fox' => output = 'tHE qUICK bROWN fOX'
  

function swap(str) {
  let arr = str.split(" ");
  let out = "";
  for (let i = 0; i < arr.length; i++) {
    out += arr[i][0].toLowerCase() + arr[i].slice(1).toUpperCase() + " ";
  }
  return out;
}
console.log(swap("The Quick Brown Fox"));

///////////////////////////////

function swap(str) {
      let out = "";
    for (let i = 0; i < str.length; i++) {
        if(str[i] === str[i].toUpperCase()){
            out += str[i].toLowerCase()
        }else{
            out += str[i].toUpperCase()
        }
        }
        return out
    }
    console.log(swap("The Quick Brown Fox"));

/////////////////////////////

function swap(str) {
  let out = "";
  for (let i = 0; i < str.length; i++) {
    out +=
      str[i] === str[i].toUpperCase()
        ? str[i].toLowerCase()
        : str[i].toUpperCase();
  }
  return out;
}
console.log(swap("The Quick Brown Fox"));

//Assignment 4

// Write a JavaScript function to find the difference of two arrays
// Example: input = difference([1, 2, 3], [100, 2, 1, 10]) => output = ["3", "10", "100"]


function findDiff(arr1, arr2) {
  let newArr = [];
  arr1 = arr1.toString().split(",");
  arr2 = arr1.toString().split(",");
  for (let i in arr1) {
    if (arr2.indexOf(arr1[i] === -1)) newArr.push(arr1[i]);
  }
  for (let i in arr2) {
    if (arr1.indexOf(arr2[i] === -1)) newArr.push(arr2[i]);
  }
  return newArr;
}
console.log(findDiff([1, 2, 3], [100, 2, 1, 10]));
console.log(findDiff([1, 2, 3, 4, 5, 7], [1, [2], [3, [4]], [5, 6]]));
