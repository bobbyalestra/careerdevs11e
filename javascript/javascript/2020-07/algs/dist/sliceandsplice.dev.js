"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

// We need to copy each element from the first array into the second array starting at the index n. We’ve also got to ensure that the original arrays are not mutated. That is, we cannot make any changes to the original arrays.
// Relevant Links
function spliceAndSlice(array1, array2, times) {
  var localArray = array2.slice();
  localArray.splice.apply(localArray, [n, 0].concat(_toConsumableArray(array1)));
}