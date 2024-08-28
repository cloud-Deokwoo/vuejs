var name = "홍길동";
var age = 20;
var email = "gdhong@test.com";

//var obj = { name: name, age: age, email: email };
var obj = { name, age, email };
console.log(obj);


//객체의 멤버 함수(메소드)를 정의하는 여러 가지 방법
let p1 = {
    name : "아이패드",      //name,
    price : 200000,
    quantity : 2,
    //멤버 함수(메소드) 선언 방법1
    order : function() {
        if (!this.amount) {
            this.amount = this.quantity * this.price;
        }
        console.log("주문금액 : " + this.amount);
    },
    //멤버 함수(메소드) 선언 방법2
    discount(rate) {
        if (rate > 0 && rate < 0.8) {
            this.amount = (1-rate) * this.price * this.quantity;
        }
        console.log((100*rate) + "% 할인된 금액으로 구매합니다.");
    },
    //화살표 함수를 이용하여 선언 
    order : () => {
        if (!this.amount) {
            this.amount = this.quantity * this.price;
        }
        console.log("주문금액 : " + this.amount);
    },

}
p1.discount(0.2);
p1.order();