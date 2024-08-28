"use strict";

//Proxy(대리자) : 객체나 배열을 대신하여 getter 동작과 setter 동작을 하는 대리 객체임.
//Proxy는 객체의 손실이나 변경을 원하지 않는 경우 원본은 안전하게 그대로 두고 Proxy 객체를 사용하여 계속적인 요청에 의해 변동을 일으키고, 최종 결과를 원본 객체에 저장한다.
//Object Proxy : 객체를 대신하는 대리자, obj : 원본 객체
var obj = {
  name: "홍길동",
  age: 20
};
var obj_proxy = new Proxy(obj, {
  get: function get(target, key) {
    console.log("## get " + key);
    if (!target[key]) throw new Error("\uC874\uC7AC\uD558\uC9C0 \uC54A\uB294 \uC18D\uC131(".concat(key, ")\uC785\uB2C8\uB2E4"));
    return target[key];
  },
  set: function set(target, key, value) {
    console.log("## set " + key);
    if (!target[key]) throw new Error("\uC874\uC7AC\uD558\uC9C0 \uC54A\uB294 \uC18D\uC131(".concat(key, ")\uC785\uB2C8\uB2E4"));
    target[key] = value;
  }
});
console.log("변경 전 : " + obj_proxy.name); //읽기 작업 get 호출
obj_proxy.name = "이몽룡"; //쓰기 작업 set 호출
obj_proxy.age = 30; //쓰기 작업 set 호출
console.log("변경 후 : " + obj_proxy.name);
console.log("obj : ");
console.log(obj);

//Array Proxy : 배열을 대신하는 대리자
var arr = [10, 20, 30];
var arr_proxy = new Proxy(arr, {
  get: function get(target, key, receiver) {
    //console.log("## get " + key)
    if (!target[key]) {
      // throw new Error(`존재하지 않는 속성(${key})입니다`);
      target[key] = 0;
    }
    return target[key];
  },
  set: function set(target, key, value) {
    console.log("## set " + key);
    if (!target[key]) throw new Error("\uC874\uC7AC\uD558\uC9C0 \uC54A\uB294 \uC18D\uC131(".concat(key, ")\uC785\uB2C8\uB2E4"));
    target[key] = value;
  }
});
console.log();
console.log("변경 전 : " + arr_proxy[1]);
arr_proxy[1] = 99;
//arr_proxy[4] = 100;     //오류발생
console.log("변경 후 : " + arr_proxy[1]);
console.log("arr : ");
console.log(arr);