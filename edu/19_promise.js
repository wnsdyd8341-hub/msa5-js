// setTimeout(() => {
//   console.log("A");
// }, 1500);
// setTimeout(() => {
//   console.log("B");
// }, 1000);
// setTimeout(() => {
//   console.log("C");
// }, 500);

// setTimeout(() => {
//   console.log("a");
//   setTimeout(() => {
//     console.log("b");
//     setTimeout(() => {
//       console.log("c");
//     }, 500);
//   }, 1000);
// }, 1500);


// 콜백 지옥을 회피하기 위해서 프로미스 기반으로 변경
const timer = (str) =>{
  return new Promise((resolve,reject)=>{
    setTimeout(() => {
      console.log(str);
      if(str==='A' || str ==='B'|| str ==='C') {
        resolve({code : "허용", word: str});
      } else {
        reject(new Error("허용하지 않는 문자가 입력됐다"));
      }
    }, 500);
  })
}

timer('A')
.then((result)=>{
  //resolve일때만 실행
  console.log(result.code , result.word);
  return timer('B'); //동기 처리를 하기위한 방법
})
.then((result)=>{
  console.log(result.code , result.word);
  return timer('C');
})
then((result)=>{
  console.log(result.code, result.word);  
})
.catch((error)=>{
  //reject일때만 실행
  console.log(error.message);
})
.finally(()=>{
  //항상 실행되는 코드
  console.log("finally");
});

