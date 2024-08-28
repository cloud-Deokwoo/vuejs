//Promise : 비동기 처리시에 성공과 실패할 때를 대비하여 정의
//resolve : 성공할 때 처리할 코드.
//reject : 실패할 때 처리할 코드.
const p = new Promise((resolve, reject) => {
    setTimeout(()=> {
        var num = Math.random();        //0~1사이의 난수 발생
        if (num >= 0.8) {
            //reject() 호출되면 catch() 함수로 결과 받을 수 있음  
            reject("생성된 숫자가 0.8이상임 - " + num);
        }
        //resolve() 호출되면 then() 함수로 결과 받을 수 있음  
        resolve(num);
    }, 2000)        //2초후에 결과 반환
})

p.then((result)=> {
    console.log("처리 결과 : ", result)
})
.catch((error)=>{
    console.log("오류 : ", error)
})

console.log("## Promise 객체 생성!");


//성공에 관한 Promise 만 기술
var p2 = new Promise((resolve, reject)=> {
    resolve("first!")
})

p2.then((msg)=> {
    console.log(msg);
    //throw new Error("## 에러!!")  //강제 예외 발생
    return "second";
})
.then((msg)=>{
    console.log(msg);
    return "third";
})
.then((msg)=>{
    console.log(msg);
})
.catch((error)=> {
    console.log("오류 발생 ==>  " + error)
})