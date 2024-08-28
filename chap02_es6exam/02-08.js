//객체 변수 선언
var obj = { result: 0 };

//객체 속성 추가
obj.name = "홍길동";
obj.age = 20;

//객체 속성의 함수(메소드)를 정의하는 예제 
obj.add = function(x,y) {  
   this.result = x+y;
}
obj.add(3,4)    //함수 호출
console.log(obj)        // { result: 7, name: '홍길동', age: 20, add: [Function (anonymous)] }


//객체 변수 선언
var obj2 = { result: 0 };
obj2.add = function(x,y) {  
   //this는 해당 함수를 소유한 객체를 의미함, 객체가 생략된 경우 브라우저에서는 window객체가 됨 
   this.result = x+y;
}
var add2 = obj2.add;    //add2는 함수이, obj2.add는 obj2 객체 속성의 함수(메소드)임 - 괄호 문자는 생략 가능함
console.log(add2 === obj2.add)      //true : 그러므로 add2()와 obj2.add() 는 같음
add2(3,4)       //전역변수 result에 7이 할당됨.
console.log(obj);       //{ result: 7, name: '홍길동', age: 20, add: [Function (anonymous)] }
console.log(result);    //7
//console.log(window.result);    // 브라우저의 개발자 도구에서 확인해야 하며, 이 때 window는 브라우저 전역 객체임 