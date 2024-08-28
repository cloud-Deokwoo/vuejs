//함수 인자에 기본 값 설정
function addContact(name, mobile, home="없음", address="없음", email="없음") {  
    var str = `name=${name}, mobile=${mobile}, home=${home},` + 
            ` address=${address}, email=${email}`;
    console.log(str);
}
   
addContact("홍길동", "010-222-3331");   //home, address, email 은 기본값이 설정되어 있으므로 전달값을 생략할 수 있음
addContact("이몽룡", "010-222-3331", "02-3422-9900", "서울시"); //email 만 전달값을 생략 

//함수의 인자 생략형(...)은 실제 배열임
//배열 
//색인배열[0..n]
//연관배열 = 자바에서의 Map과 같이 { key : value } 의 형식
//JSON : 색인 배열은 []로 연관 배열은 {}로 정의함
function foodReport(name, age, ...favoriteFoods) {
    console.log(name + ", " + age);
    console.log(favoriteFoods);
    console.log(favoriteFoods.length);
}

foodReport("이몽룡", 20, "짜장면", "냉면", "불고기");      //"짜장면", "냉면", "불고기" 는 favoriteFoods 색인 배열에 저장됨
foodReport("홍길동", 16, "초밥");   //"초밥" 만 favoriteFoods 단일 기억장소에 저장됨