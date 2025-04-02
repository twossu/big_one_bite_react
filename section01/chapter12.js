// 1. 함수 표현식
function funcA() {
  console.log("funcA");
}
let varA = funcA; //함수 자체를 변수에 담아 둘 수 있다
varA();

let varB = function () {
  //익명함수수
  console.log("funcB");
};

varB();

// 2. 화살표 함수
let varC = (value) => {
  console.log(value);
  return value + 1;
};

console.log(varC(10)); //11출력
