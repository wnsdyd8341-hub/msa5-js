// 타이머 함수

// setTimeout(cb, ms[,args...]):number
// 설정한 일정 시간 후에 콜백함수 실행
// 콜백 함수에 파라미터가 필요한 경우에만 ...args 추가
// return값은 timeoutId , 정수값 (해당 타이머의 고유한 식별값)
const timeoutId = setTimeout(() => {
  console.log("B");
}, 1000);
console.log("C");

// 해당 ID의 setTimeout을 취소 시킨다.
// clearTimeout(timeoutId);

//일정 시간마다 반복하는 함수
//setInterval(cb, ms[, ...args]):number
// return값은 intervalId 정수값

const intervalId = setInterval(() => {
  console.log("ac");
}, 1000);
setTimeout(() => {
  clearInterval(intervalId);
}, 5000);

//clearInterval(intervalId) setInterval을 멈춘다

// function time() {
//   console.log("1");
// }
