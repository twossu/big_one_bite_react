// 1. Numbet Type
let num1 = 27;
let num2 = 1.5;
let num3 = -20;
console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2); //모듈러연산

let inf = Infinity; //양의 무한대
let minf = -Infinity; //음의 무한대

let nan = NaN; //수치연산 실패했을때 결과 값
console.log(1 * "Hello"); //이런식으로

// 2. String Type
let myName = "이정환"; //문자열은 "", ''로 꼭 묶어야함.
let myLocation = "목동";
let introduce = myName + myLocation; //이정환목동
console.log(introduce); //문자도 이어붙일 수 있다!

// 템플릿 리터럴 문법
let introduceText = `${myName}은 ${myLocation}에 거주합니다.`;
//``백틱도 가능 이건 1번 왼쪽에 있음, 동적으로 사용가능
console.log(introduceText); //이정한은 목동에 거주합니다.

// 3. Boolean Type(상태를 의미하는데 사용됨됨)
let isSwitchOn = true;
let isEmpty = false;

//4. Null Type (아무것도 없다)
let empty = null;

// 5. Undefind Type (아무것도 없이 선언해도 undifned가 뜸뜸)
let none;
console.log(none);
