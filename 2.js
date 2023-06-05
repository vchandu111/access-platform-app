function test(str, arr) {
  let suffix = "";
  let count = 1;

  while (arr.includes(str + suffix)) {
    suffix = `(${count})`; 
    count++;
  }

  const modifiedString = str + suffix;
  arr.push(modifiedString); 
  return arr;
}

const myString = "c";
const myArray = ["a", "b", "c", "d"];

const modifiedArray = test(myString, myArray);
console.log(modifiedArray);

function appendArrayToArray(arr1, arr2) {
  function appendStringWithSuffix(baseStr, arr) {
    let suffix = "";
    let count = 1;

    while (arr.includes(baseStr + suffix)) {
      suffix = `(${count})`;
      count++;
    }

    return baseStr + suffix;
  }

  const modifiedArray = [];
  arr1.forEach((str) => {
    const modifiedString = appendStringWithSuffix(str, arr2);
    modifiedArray.push(modifiedString);
  });

  return arr2.concat(modifiedArray);
}

const myArray1 = ["a", "b", "c"];
const myArray2 = ["a", "e", "c"];

const modifiedArray = appendArrayToArray(myArray1, myArray2);
console.log(modifiedArray);
