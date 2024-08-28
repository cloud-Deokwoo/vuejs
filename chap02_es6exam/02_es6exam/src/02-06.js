//함수 선언시 매개변수인 name, phone, email="이메일없음", age=0 로 하는 경우는 함수 호출시 전달값의 순서를 지켜야 함.
//함수 선언시 객체의 형태인 {name, phone, email="이메일없음", age=0} 로 하는 경우는 함수 호출시 전달값의 순서를 지키지 않아도 됨.

//함수의 인자로 구조분해 할당과 기본 인자값을 사용한 함수 인자선언 
function addContact1({name, phone, email="이메일없음", age=0}) {
    console.log(name,phone,email,age);      //이몽룡 010-3434-8989 이메일없음 0
}    
addContact1({ name : "이몽룡", phone : "010-3434-8989" })

//함수의 인자로 객체 변수 선언 
function addContact2(contact) {
    if (!contact.email) contact.email = "이메일없음";
    if (!contact.age) contact.age = 0;
    let { name, phone, email, age} = contact;
    console.log(name,phone,email,age);  //이몽룡 010-3434-8989 이메일없음 0
}    
addContact2({ name : "이몽룡", phone : "010-3434-8989" })   //함수 선언시 contact 하나의 변수로 정의하였지만, 함수 호출시 전달값을 객체형으로 하였으므로, contact는 객체가 됨.

//일반적인 함수의 인자로 기본 인자값 선언 예제 
function addContact3(name,phone,email="이메일없음",age=0) {
    console.log(name,phone,email,age);  //이몽룡 010-3434-8989 이메일없음 0
}    
addContact3("이몽룡","010-3434-8989")

