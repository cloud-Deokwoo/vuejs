//1. 템플릿 리터럴 활용법
const d1 = new Date();
let name = "홍길동";
//템플릿 리터럴 : `${}`
let r1 = `${name} 님에게 ${d1.toDateString() }에 연락했다.`;
console.log(r1);

let product = "갤럭시S7";
let price = 199000;
let str = `${product}의 가격은
        ${price}원 입니다.`;
console.log(str);



let base = 100;

//2. 모듈 만들기1
const add = x => base + x ;
const multiply = x => base * x;

//외부에서 add(), multiply() 함수를 사용 할 수 있게 노출한다
//아래의 코드는 npm run build로 트랜스파일 한 후 사용해야 함 
export {add, multiply}

//3. 모듈 만들기2
const sub = x => base - x ;
const divide = x => base / x;
const getBase = () => base;
//외부에서 add(), multiply() 함수를 사용 할 수 있게 노출한다
//아래의 코드는 npm run build로 트랜스파일 한 후 사용해야 함 
export {sub, divide}
export default getBase;