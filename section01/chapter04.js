// 1. 변수(바 뀔 수 있 다)
let age = 27;
//console.log(age); 27출력
age = 30;
//console.log(age); 30선언해서 30으로 바뀜

// 2. 상수(바뀔 수 없 다.)
const birth = "1997.01..7";

// 3. 변수 명명규칙(네이밍 규칙)
// 3-1. $, _ 제외한 기호는 사용할 수 없다.
let $_name;

// 3-2. 숫자로 시작할 수 없다.
let name1;
let $2name; //이런 식으로 기호 사용 후 숫자사용가능

// 3-3. 예약어를 사용할 수 없다.
//let if; 이런

// 4. 변수 명명 가이드 (변수명이 어떤건지 바로 알 수 있게!)
let salesCount = 1;
let refundCount = 1;
let totalSalescount = salesCount - refundCount;
