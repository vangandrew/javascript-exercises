const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2
};

const sum = function(array) {
  const sum = array.reduce((total, currentNum) => {
    return total + currentNum;
  }, 0)

  return sum;
};

const multiply = function(array) {
  const total = array.reduce((total, currentNum) => {
    return total * currentNum;
  }, 1)
  return total;
};

const power = function(num1, num2) {
  return Math.pow(num1, num2);
};

const factorial = function() {
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
