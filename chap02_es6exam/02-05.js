let arr = [10,20,30,40];    //색인 배열 선언

let 제품1번갯수 = arr[0];
let 제품2번갯수 = arr[1];
let 제품3번갯수 = arr[2];

//배열 구조분해 할당 연산자
let [a1,a2,a3] = arr;   //a1=10, a2=20, a3=30 으로 각 각 할당됨.
console.log(a1, a2, a3);

let p1 = { name:"홍길동", age:20, gender:"M" };

//객체 구조분해 할당 연산자
let { name: n, age:a, gender } = p1;    //n="홍길동", a=20, gender="M" 으로 각 각 할당됨
console.log(n, a, gender);  //홍길동    20   M

//객체 선언시 변수를 사용하여 속성 값 설정하는 방법으로 key와 value를 각 각 명시하지 않고, key와 value 를 묶어서 전달
let user = {n, a, gender};  //user 객체의 멤버는 n:"홍길동", a:20, gender:"M"
console.log(user);  //{ n: '홍길동', a: 20, gender: 'M' }

user = p1;
console.log(user);  //{name: "홍길동", age: 20, gender: "M"} 
