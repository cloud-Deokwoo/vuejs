"use strict";

//1. 함수 정의와 객체에 결과를 저장하는 방법
//함수 정의
var add = function add(x, y) {
  this.result = x + y;
};
//객체 정의
var obj = {};

//1. apply() 사용, appy() 함수 호출시 전달되는 인자는 1번째는 객체 자신되는 2번째는 함수의 인자로 배열로 전달해야함 
//add.apply(obj, [3,4]) : obj 객체에 add(3, 4) 의 결과를 저장
//2. call() 사용, call() 함수는 함수 호출시 인자는 1번째는 객체가 되고 나머지는 호출에 각각 대응 됨 
//add.call(obj,3,4) : obj 객체에 add(3, 4) 의 결과를 저장
//3. bind() 사용, bind() 함수는 객체(obj)의 멤버 함수로 함수(add)로 연결 할 수 있음, 측 add() 내부에서 사용는 this는 obj가 됨   
//add.bind(obj), add2(3,4) : obj 객체에 add2(3, 4) 의 결과를 저장

var add2 = add.bind(obj); //add2는 결과를 obj에 저장하여 바인딩된 함수임
add2(3, 4);
console.log(obj); // { result : 7 }
console.log(add); // [Function: add]
console.log(add2); // [Function: bound add]

add = add.bind(obj);
add(3, 4);
console.log(obj); // { result : 7 }

//함수.apply(객체, [값1, 값2,...]) : [값1, 값2,...] 를 함수로 처리하여 그 결과를 객체에 저장할 수 있도록 적용해주는 메소드
//함수.call(객체, 값1, 값2,...) : 값1, 값2,... 등 전달값을 함수 호출하여 처리한 후 그 결과를 객체에 저장하는 함수 호출 메소드
//함수.bind(객체) : 앞으로 함수로 호출될 경우 그 결과를 객체에 저장할 수 있도록 하는 바인딩 메소드
//새함수 = 함수.bind(객체), 새함수(값1, 값2,...)

//2. 내부 함수 활용
var obj2 = {
  result: 0
};
obj2.add = function (x, y) {
  //내부함수 선언 
  function inner() {
    this.result = x + y;
  }
  //내부함수 호출 
  inner();
};
obj2.add(3, 4);
console.log(obj2); // { result: 0 }
console.log(result); // 7

//3. 함수의 내부 함수와 바인딩
var obj3 = {
  result: 0
};
obj3.add = function (x, y) {
  //함수 선언 
  function inner() {
    this.result = x + y;
  }
  inner = inner.bind(this);
  inner();
};
obj3.add(3, 4);
console.log(obj3); // { result: 7 }

//4. 함수의 내부 화살표 함수 활용
var obj4 = {
  result: 0
};
obj4.add = function (x, y) {
  var _this = this;
  //함수 선언 
  var inner = function inner() {
    _this.result = x + y;
  };
  //함수 호출
  inner();
};
obj4.add(3, 4);
console.log(obj4); // { result: 7 }