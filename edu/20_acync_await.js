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

async function test1(){
    try {
        const result1 = await timer('A');
        console.log(result1.code , result1.word);

        const result2 = await timer('B');
        console.log(result2.code , result2.word);

        const result3 = await timer('C');
        console.log(result3.code , result3.word);
    } catch (error) {
        console.log(error.message);
    }
}

// 함수앞에 async 붙여줘야함
const process = async () =>{
    try {
        const result1 = await timer('A');
        console.log(result1.code , result1.word);

        const result2 = await timer('B');
        console.log(result2.code , result2.word);

        const result3 = await timer('C');
        console.log(result3.code , result3.word);
        
    } catch (error) {
        console.log(error.message);
    }
}
process();