const form = document.querySelector('form');

form.addEventListener('submit',(e)=>{
    //제출 눌럿을때 화면 깜빡이는거 제거
    e.preventDefault();
    
    const page = e.target.page.value;
    const limit = e.target.limit.value;
    
})
