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

letterCounter("aaabbbbcccaa")