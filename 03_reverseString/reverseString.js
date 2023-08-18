const reverseString = function (input) {
  let reversedString;
  if (input === "") {
    reversedString = "";
  } else {
    reversedString = String(input).split("").reverse().join("");
  }
  return reversedString;
};

reverseString(""); // Do not edit below this line module.exports = reverseString;

// Do not edit below this line
module.exports = reverseString;
