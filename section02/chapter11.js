console.log(1);

setTimeout(() => {
  console.log(2);
}, 3000);

console.log(3);
//1 3 이 출력됐다가 3000 인 3초가 지나면 2가 출력
