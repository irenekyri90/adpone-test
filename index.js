function letterCounter (string) {
  const array = string.split("");

  let firstIndex = 0;
  let stringFinished = false;
  let letterCount = 0;
  let returnArray = [];

  while (!stringFinished) {
    
    for (let i = firstIndex; i < array.length; i++) {
      if (array[i] === array[firstIndex]) {
        letterCount++;
        
        if (array[i+1] !== array[i]) {
          returnArray.push([array[i], letterCount]);
          letterCount = 0;
          firstIndex = i+1;
        }
      }

      stringFinished = true;

    }

    return returnArray;

  }
};


//function without while loop

function letterCounter(string) {
  const array = string.split('');

  let firstIndex = 0;
  let counter = 0;
  let finalArr = [];

  for(let i = firstIndex; i < array.length; i++){
    if(array[i] === array[firstIndex]) {
      counter++

      if(array[i] !== array[i+1]) {
        finalArr.push([array[i], counter]);

        counter = 0;
        firstIndex = i+1
      }
    }
    
  }
 return finalArr; 
}


//Better and shorter code using forEach loop, ternary operator and referring to next index rather than first index.
function letterCounter(string) {
  const arr = string.split('');

  let counter = 1;
  let finalArr = [];

  arr.forEach((letter, i, arr) => {
    (arr[i] === arr[i+1]) ? counter++
    : (finalArr.push([arr[i], counter]), counter = 1)
  })
  return finalArr;
}

letterCounter("aaabbbbcccaa")