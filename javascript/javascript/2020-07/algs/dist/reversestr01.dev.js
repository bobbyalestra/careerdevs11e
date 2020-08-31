"use strict";

function reverseString(string) {
  for (var reverse = ' ', i = string.length - 1; i > -1; i--) {
    reverse += string[i];
  }

  console.log(reverse);
}

reverseString('hello');

function reverstr(str) {
  for (var rev = '', i = str.length - 1; i > -1; i--) {
    console.log(rev);
  }
}