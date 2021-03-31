// need a fucntion that takes in an array
// function needs to log a string

/* ISSUES
1. first day is 0
2. 
*/

const testData1 = [17, 21, 23];
const testData2 = [12, 5, -5, 0, 4];

const printForecast = (arr) => {
  let str = "";

  for (let i = 0; i < arr.length; i++) {
    str += `... ${arr[i]}ºC in ${i + 1} days`;
  }
  console.log(`${str} ...`);
};

printForecast(testData2);
