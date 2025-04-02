// 함수선언언
function greeting() {
  console.log("안녕하세요");
}

console.log("호출 전");
greeting(); //함수 호출할때 소괄호 꼭곡
console.log("호출 후");
// 결과 호출 전 안녕하세요 호출 후

function getArea(width, height) {
  let area = width * height;

  console.log(area);
}

let area1 = getArea(10, 20);
console.log(area1);

let area2 = getArea(30, 20);
console.log(area2);

function getArea(width, height) {
  let area = width * height;

  return area;
}
let area3 = getArea(120, 200);

// 호이스팅 함수가 아래에 두어도 알아서 잘 됨 c언어와 다름
// -> 끌어올리다 라는 뜻
function getArea(width, height) {
  function another() {
    // 중첩 함수 함수 안에 함수 가능
    console.log("another");
  }

  another();
  let area = width * height;

  return area;
}
