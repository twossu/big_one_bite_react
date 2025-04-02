//자바스크립트에서는 참, 거짓이 아닌 값도 참, 거짓으로 평가한다
// 1. Falsy한 값 , 이러한 값은 다 falsy로 평가
let f1 = undefined;
let f2 = null;
let f3 = 0;
let f4 = -0;
let f5 = NaN;
let f6 = "";
let f7 = 0n;

if (!f1) {
  console.log("falsy");
}
// 2. Truthy 한 값
// -> 7가지 Falsy 한 값들 제외한 나머지 모든 값
let t1 = "hello";
let t2 = 123;
let t3 = [];
let t4 = {};
let t5 = () => {};

if (t1) {
  console.log("truthy");
}
// 3. 활용 사례
//먼저 null이거나 undefined이 아닌지 먼저 확인해야함
function printName(person) {
  if (!person) {
    console.log("person의 값이 없음");
    return;
  }
  console.log(person.name);
}

let person = { name: "이정환" };
printName(person);
