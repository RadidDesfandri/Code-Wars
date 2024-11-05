var uniqueInOrder = function (iterable) {
  if (typeof iterable === "object") {
    return iterable.filter((e, i, arr) => e !== arr[i - 1]);
  } else if (typeof iterable === "string") {
    return iterable.split("").filter((e, i, arr) => e !== arr[i - 1]);
  }
  return iterable;
};

console.log(uniqueInOrder([1, 2, 2, 3, 3]));
console.log(typeof [1, 2, 3]);
console.log(typeof "asadda");

const numbers = [1, 2, 3, 4, 5, 6];

const evenNumbers = numbers.filter((element, index, array) => {
  console.log(`Element: ${element}, Index: ${index}, Array: ${array}`);
  return element % 2 === 0;
});
