let num1 = 1;
let num2 = num1;

//참조형 
// let obj1 = {id:1, name : '둘리', etc : {addr: '대구' , test: {key1: 'val1'}}};
// // let obj2 = obj1;
// // obj2.name = '홍길동';

// // 얕은 복사(shallow Copy) : 쓰는곳은 계층이 없는 객체의 값을 복사할때
// // 객체의 최상위 계층만 값을 복사하고 , 그 이하 계층은 참조형 데이터일 경우 주소만 복사하는 방식
// let obj3 = {...obj1};
// obj3.name = '또치';
// abj3.etc.addr = '서울';
// //최상위 계층의 값을 바꿀땐 값이 안바뀌는데 , 그 아래 계층의 값을 바꾸면 값이 바뀐다
// console.log(obj1.name, obj3.name, obj1.addr, obj3.addr);

// 깊은 복사 (Deep Copy)
// 객체의 모든 계층의 값을 복사
obj1 = {id:1,name : '둘리', etc : {addr : '대구'}};
let obj4 = JSON.parse(JSON.stringify(obj1));
obj4.name = '또치';
obj4.etc.addr = '서울';
console.log(obj1.name, obj4.name, obj1.etc.addr, obj4.etc.addr);
