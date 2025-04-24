let pattern = "array";

let regExone = new RegExp(pattern);

let flag = "gi";

let regExTwo = new RegExp(pattern, flag);
let regExThree = /array/gi;
const strTocheck =
  "f compareFn is not supplied, all non-undefined array elements are sorted by converting them to strings and comparing strings in UTF-16 code units order. For example, comes before . In a numeric sort, 9 comes before 80, but because numbers are converted to strings, comes beforein the Unicode order. array array array array array array array array array All undefined elements are sorted to the end of the array";

const result = regExThree.test(strTocheck);
console.log(result);

const anotherResult = strTocheck.match(regExThree); // match
console.log(anotherResult);
// replace
const onemoreresult = strTocheck.replace(regExThree, "array ----> javascript");
console.log(onemoreresult);

const urlweb =
  "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort";
const useableurl = urlweb.replace(/%20/, "-");
console.log(useableurl);
