// Define the pattern to search for
let pattern = "array";

// Create regular expressions
let regExOne = new RegExp(pattern);
let flag = "gi";
let regExTwo = new RegExp(pattern, flag);
let regExThree = /array/gi;

// String to check against the regular expressions
const strToCheck =
  "f compareFn is not supplied, all non-undefined array elements are sorted by converting them to strings and comparing strings in UTF-16 code units order. For example, comes before . In a numeric sort, 9 comes before 80, but because numbers are converted to strings, comes before in the Unicode order. array array array array array array array array array All undefined elements are sorted to the end of the array";

// Test if the pattern exists in the string
const result = regExThree.test(strToCheck);
console.log(result);

// Match occurrences of the pattern in the string
const anotherResult = strToCheck.match(regExThree);
console.log(anotherResult);

// Replace occurrences of the pattern with a new string
const oneMoreResult = strToCheck.replace(regExThree, "array ----> javascript");
console.log(oneMoreResult);

// URL manipulation
const urlWeb = "https://developer.mozilla";
const usableUrl = urlWeb.replace(/%20/, "-");
console.log(usableUrl);
