// 6가지의 요소 조작 메서드

// 1. push
// 배열의 맨 뒤에 새로운 요소를 추가하는 메서드
//newLength 배열의 길이를 알려줌
let arr1 = [1, 2, 3];
const newLength = arr1.push(4, 5, 6, 7);
console.log(arr1);
console.log(newLength);

// 2. pop
// 배열의 맨 뒤에 있는 요소를 제거하고, 반환
let arr2 = [1, 2, 3];
const poppedItem = arr2.pop();
console.log(poppedItem); //3출력
console.log(arr2); //1,2출력

// 3. shift
// 배열의 맨 앞에 있는 요소를 제거, 반환
//push나 pop보다 실행이 느리다
let arr3 = [1, 2, 3];
const shiftedItem = arr3.shift();
console.log(shiftedItem, arr3); //1은 제거 되고 2,3만 남아있다 출력

// 4. unshift
// 배열의 맨 앞에 새로운 요소를 추가하는 메서드
//push나 pop보다 실행이 느리다
let arr4 = [1, 2, 3];
const newLength2 = arr4.unshift(0);
console.log(newLength2, arr4); //배열길이 4 출력, 1234출력력

// 5. slice
// 마치 가위처럼, 배열의 특정 범위를 잘라내서 새로운 배열로 반환
//잘려나가도 원본배열은 잘리지않는다
let arr5 = [1, 2, 3, 4, 5];
let sliced = arr5.slice(2, 5); //2번째 인덱스부터 5까지 그럼 345출력 주의 자르려는 것보다 +1해야함
let sliced2 = arr5.slice(2); //앞에서부터 자를 것이다 345출력력
let sliced3 = arr5.slice(-3); //뒤에서 부터 자르고 싶다 뒤에서부터 3개 자르면 345출력력

// 6. concat
// 두개의 서로 다른 배열을 이어 붙여서 새로운 배열을 반환
let arr6 = [1, 2];
let arr7 = [3, 4];

let concatedArr = arr6.concat(arr7);
console.log(concatedArr);
