"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sub = exports.multiply = exports.divide = exports["default"] = exports.add = void 0;
//1. 템플릿 리터럴 활용법
var d1 = new Date();
var name = "홍길동";
//템플릿 리터럴 : `${}`
var r1 = "".concat(name, " \uB2D8\uC5D0\uAC8C ").concat(d1.toDateString(), "\uC5D0 \uC5F0\uB77D\uD588\uB2E4.");
console.log(r1);
var product = "갤럭시S7";
var price = 199000;
var str = "".concat(product, "\uC758 \uAC00\uACA9\uC740\n        ").concat(price, "\uC6D0 \uC785\uB2C8\uB2E4.");
console.log(str);
var base = 100;

//2. 모듈 만들기1
var add = exports.add = function add(x) {
  return base + x;
};
var multiply = exports.multiply = function multiply(x) {
  return base * x;
};

//외부에서 add(), multiply() 함수를 사용 할 수 있게 노출한다
//아래의 코드는 npm run build로 트랜스파일 한 후 사용해야 함 

//3. 모듈 만들기2
var sub = exports.sub = function sub(x) {
  return base - x;
};
var divide = exports.divide = function divide(x) {
  return base / x;
};
var getBase = function getBase() {
  return base;
};
//외부에서 add(), multiply() 함수를 사용 할 수 있게 노출한다
//아래의 코드는 npm run build로 트랜스파일 한 후 사용해야 함 
var _default = exports["default"] = getBase;