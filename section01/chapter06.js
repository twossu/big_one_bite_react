// 1. 묵시적 형 변환
// -> 자바스크립트 엔진이 알아서 형 변환 하는것
let num = 10;
let str = "20";
const result = num + str;
console.log(result); //문자열이기 때문에 1020으로 출력이 된다.

// 2. 명시적 형 변환
// -> 프로그래머 내장함수 등을 이용해서 직접 형 변환을 명시
// -> 문자열 -> 숫자
let sr1 = "10";
let strToNum1 = Number(str1);
console.log(10 + strToNum1); //20출력됨

let str2 = "10개";
let strToNum2 = parseInt(str2); //문자가 들어가도 잘 변환해준다 주의 숫자가 앞에 있어야함 문자앞에있으면 다 망가짐짐
console.log(strToNum2);

// -> 숫자 -> 문자열
let num1 = 20;
let numToStr1 = String(num1);
console.log(numToStr1 + "입니다");
