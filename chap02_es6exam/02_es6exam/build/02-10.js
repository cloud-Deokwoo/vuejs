"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _this = void 0;
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var name = "홍길동";
var age = 20;
var email = "gdhong@test.com";

//var obj = { name: name, age: age, email: email };
var obj = {
  name: name,
  age: age,
  email: email
};
console.log(obj);

//객체의 멤버 함수(메소드)를 정의하는 여러 가지 방법
var p1 = _defineProperty({
  name: "아이패드",
  //name,
  price: 200000,
  quantity: 2,
  //멤버 함수(메소드) 선언 방법1
  order: function order() {
    if (!this.amount) {
      this.amount = this.quantity * this.price;
    }
    console.log("주문금액 : " + this.amount);
  },
  //멤버 함수(메소드) 선언 방법2
  discount: function discount(rate) {
    if (rate > 0 && rate < 0.8) {
      this.amount = (1 - rate) * this.price * this.quantity;
    }
    console.log(100 * rate + "% 할인된 금액으로 구매합니다.");
  }
}, "order", function order() {
  if (!_this.amount) {
    _this.amount = _this.quantity * _this.price;
  }
  console.log("주문금액 : " + _this.amount);
});
p1.discount(0.2);
p1.order();