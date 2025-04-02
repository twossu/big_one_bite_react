//단락평가가 작동됨 그래서 앞에 returnFalse함수만 출력됨
//근데 트루 먼저 하면 단락평가가 작동이 안됨
function returnFalse() {
  console.log("False 함수");
  return false;
}
function returnTrue() {
  console.log("true 함수");
  return True;
}
console.log(returnFalse() && returnTrue());

// 단락 평가 활용 사례
function printName(person) {
  const name = person && person.name;
  console.log(name || "person의 값이 없음");
}

printName();
printName({ name: "이정환" });
//T//T 면 앞에 T 출력 / T&&T면 뒤에 T출력
