"use strict";

var msg = "GLOBAL";
function outer() {
  var msg = "OUTER";
  console.log("step0", msg);
  if (true) {
    var _msg = "BLOCK";
    console.log("step2", _msg);
  }
}
outer();
console.log("step1", msg);