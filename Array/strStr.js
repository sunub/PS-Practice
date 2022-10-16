"use strict";
var PRINT = function (text) {
  console.log(text);
};
var haystack = "leetcode";
var needle = "leeto";
function myAnswer(haystack, needle) {
  var str1 = haystack.split("");
  var str2 = needle.split("");
  var l = str2.length;
  for (var i = 0; i < str1.length; i++) {
    var a = 0;
    var compare = [];
    while (a < l) {
      compare.push(str1[i + a]);
      a++;
    }
    if (compare.toString() === str2.toString()) {
      return i;
    }
  }
  return -1;
}
PRINT(strStr(haystack, needle));

var haystack = "leetcode";
var needle = "leeto";
function strStr(haystack, needle) {
  var length = needle.length;
  var needlePosition = 0;
  var subHayStack = haystack.slice(needlePosition, length);
  var sliceEnd = length;
  while (needle !== subHayStack && sliceEnd < haystack.length) {
    needlePosition++;
    sliceEnd++;
    subHayStack = haystack.slice(needlePosition, sliceEnd);
  }
  if (needle === subHayStack) {
    return needlePosition;
  }
  return -1;
}
