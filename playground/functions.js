/* eslint-disable */
// function definition
function calculateBill(billAmount, taxRate = 0.13, tipRate = 0.15) {
  const total = billAmount + billAmount * taxRate + billAmount * tipRate;
  return total;
}

// function expression (saved as a variable) + anonymous function
const calBill = function(billAmount, taxRate = 0.13, tipRate = 0.15) {
  const total = billAmount + billAmount * taxRate + billAmount * tipRate;
  return total;
}

// arrow function (it's also an anonymous function)
const inchToCM = inches => inches * 2.54;
const add = (a, b = 3) => a + b;
//// this is valid but harder to read:
const makeABaby = (first, last) => ({ name: `${first} ${last}`, age: 0})

// Methods: functions that live inside an object
const wes = {
  name: 'Wes Bos',
  // method
  sayHi: function() {
    return 'Hi Wes'
  },
  // short hand method
  yellHi() {
    return 'HI WES!'
  },
  // arrow function
  whisperHi: () => {
    return 'hi wesss'
  }
}

// Callback function
