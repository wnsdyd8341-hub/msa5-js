// 구조분해 문법
// 배열이나 객체에서 값을 추출하여 변수에 바로 할당하는 문법

//Array Destructuring
const arr = [1, 2, 3, 4, 5];
// 배열은 대괄호
let [il, i2, i3, i4, i5] = arr;

//Object Destructuring
const user = {
  name: "홍길동",
  age: 20,
  gender: "M",
  address: "대구광역시",
  info: {
    board: 1,
  },
};

//객체는 중괄호
//프로퍼티 이름 맞춰줘야함
// const { name, age } = user;
// 변수명을 바꾸는 방법
//const { name : userName, age } = user;
// 초기값을 넣어둘수있다
const { name: userName, age, addr2 = "없음" } = user;

console.log(userName, age, addr2);
