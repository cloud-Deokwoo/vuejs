"use strict";

//const 의 keyword 특징, 객체 선언 
var p0 = "10";
var p1 = {
  key: "value",
  name: "john",
  age: 20
};
var p2 = 10;
//p1.key => "value"
p1.key = "김기태";
p1.age = 22;
p1["age"] = 22;

//p1은 const로 선언이 되어 있으므로 p1의 각 멤버에 관한 값의 변경은 가능하나 p1 의 전체를 변경할 수는 없음
//p1 = {name: "김기순", age: 40};

console.log(p0);
console.log(p1);
console.log(p2);