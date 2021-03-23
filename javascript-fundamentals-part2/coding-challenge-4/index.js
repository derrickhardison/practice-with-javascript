const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tips = [];
const total = [];

const tipAmount15 = (billValue) => {
  const tipAmount = billValue * 0.15;
  return tipAmount;
};

const tipAmount20 = (billValue) => {
  const tipAmount = billValue * 0.2;
  return tipAmount;
};

const calcTip = (billValue) => {
  if (billValue >= 50 && billValue <= 300) {
    const tipAmount = tipAmount15(billValue);
    const total = tipAmount + billValue;
    return tipAmount;
  } else {
    const tipAmount = tipAmount20(billValue);
    const total = tipAmount + billValue;
    return tipAmount;
  }
};

const calcAverage = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  //console.log(sum);
  return sum / arr.length;
};

for (let i = 0; i < bills.length; i++) {
  tips.push(calcTip(bills[i]));
  total.push(calcTip(bills[i]) + bills[i]);
}

console.log(bills);
console.log(tips);
console.log(total);

console.log(calcAverage(total));
