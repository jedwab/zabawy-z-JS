var compareArrays = function (array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (var i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
}

console.log(compareArrays([1, 2, 3], [4, 5, "house"]));
console.log(compareArrays([1, 2, 3], [1, 2, 3]));
console.log(compareArrays([1, 2, 3], [1, 2, 3, 4]));
console.log(compareArrays(["pig", "window", "opportunity"], ["pig", "window", "opporrtunity"]));