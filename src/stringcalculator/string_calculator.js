const { add: lodashAdd } = require("lodash");

const sumTwoNumbers = (nbr1, nbr2) => nbr1 + nbr2;

const add = (input, delimited) => {
  if (input === "") return 0;
  else if (input.length === 1) return Number(input);
  const splitedInput = input.split(delimited);
  return sumTwoNumbers(Number(splitedInput[0]), Number(splitedInput[1]));
};

module.exports = {
  add,
};
