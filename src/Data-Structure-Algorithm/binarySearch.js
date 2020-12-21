function binarySearch(array, target) {
  var start = 0;
  var end = array.length - 1;
  var mid;
  while (start <= end) {
    mid = Math.floor((start + end) / 2);
    if (array[mid] === target) return mid;
    else if (array[mid] < target) start = mid + 1;
    else end = mid - 1;
  }
  return -1;
}
function binarySearch(array, target, start = 0, end = array.length - 1) {
  // before ES6
  // start = start || 0;
  // end = end || array.length - 1;
  var mid = Math.floor((start + end) / 2);
  if (start > end) return -1;
  if (array[mid] === target) return mid;
  return array[mid] < target
    ? binarySearch(array, target, mid + 1, end)
    : binarySearch(array, target, start, mid - 1);
}

console.log(binarySearch([1, 2, 3, 4, 5, 6], 1)); // 0
console.log(binarySearch([1, 2, 3, 4, 5, 6], 3)); // 2
console.log(binarySearch([1, 2, 3, 4, 5, 6], 5)); // 4
console.log(binarySearch([1, 2, 3, 4, 5, 6], 6)); // 5
console.log(binarySearch([1, 2, 3, 4, 5, 6], -1)); // -1
console.log(binarySearch([1, 2, 3, 4, 5, 6], 0)); // -1
console.log(binarySearch([1, 2, 3, 4, 5, 6], 7)); // -1
