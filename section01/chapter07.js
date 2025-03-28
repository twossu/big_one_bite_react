// 1. 대입 연산자
let var1 = 1;

// 2. 산술 연산자
let num1 = 3 + 2;
let num2 = 3 - 2;
let num3 = 3 * 2; // 덧셈, 뺄셈보다 우선순위가 높다다 그냥 수학풀이랑 같음
let num4 = 3 / 2;
let num5 = 3 % 2;

let num6 = (1 + 2) * 10; //30

// 3. 복합 대입 연산자 (산술+대입입)
let num7 = 10;
num7 += 20; // =num7 = num7 + 20     30출력
num7 -= 20;
num7 *= 20;
num7 /= 20;
num7 %= 10;

// 4. 증감 연산자
let num8 = 10;
++num8; //이 라인에서 바로 1추가 전위연산
num8++; //라인이 끝난 다음에 1추가 후위연산

// 5. 논리 연산자
let or = true || false;

let and = true && false;

let not = !true;

// 6. 비교 연산자
let comp1 = 1 === "1"; //=== 세번 쓰는 이유는 자료형 같은지?
let comp2 = 1 !== 2;

let comp3 = 2 > 1;
let comp4 = 2 < 1;

let comp5 = 2 >= 2;
let comp6 = 2 <= 2;
