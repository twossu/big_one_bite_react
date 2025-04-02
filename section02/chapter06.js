// 1. 배열 순회
let arr = [1, 2, 3];

// 1.1 배열 인덱스 length에는 3이라는 값이 있을 것임
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

let arr2 = [4, 5, 6, 7, 8];
for (let i = 0; i < arr2.length; i++) {
  console.log(arr2[i]);
}

// 1.2 for of 반복문 이거잘써먹고싶다
for (let item of arr) {
  //arr값이 item에 들어감
  console.log(item);
}

// 2. 객체 순회
let person = {
  name: "이정환",
  age: 27,
  hobby: "테니스",
};

// 2.1 Object.keys 사용
// -> 객체에서 key 값들만 뽑아서 새로운 배열로 반환
let keys = Object.keys(person);
console.log(keys);

//배열에만 쓸수 있는 for of
for (let key of keys) {
  const value = person[key];
  console.log(key, value);
}

// 2.2 Object.values
// -> 객체에서 value 값들만 뽑아서 새로운 배열로 반환
let values = Object.values(person);

for (let value of values) {
  console.log(value);
}

// 2.3 for in 객체에만 쓸 수 있음
for (let key in person) {
  const value = person[key];
  console.log(key, value);
}
