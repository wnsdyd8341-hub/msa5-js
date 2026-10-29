const form = document.querySelector('form');

form.addEventListener('submit',async(e)=>{
    //제출 눌럿을때 화면 깜빡이는거 제거
    e.preventDefault();
    
    const baseURL = 'https://picsum.photos';
    const path = '/v2/list';

    const page = e.target.page.value;
    console.log(page);
    
    const limit = e.target.limit.value;
    
    const url = `${baseURL}${path}?page=${page}&limit=${limit}`;
    console.log(url);
    
    try{
        const response = await axios.get(url);
        console.log(response);
        
        //카드 넣을박스
        const cardContainer = document.querySelector('.card-container');
        cardContainer.textContent = '';

        const img = document.querySelector(".card-img");
        response.data.forEach((item,idx)=>{

            const card = document.createElement('div');
            card.classList.add('card');

            const cardImage = document.createElement('div');
            cardImage.classList.add('card-img');
            cardImage.style.backgroundImage = `url('${item.download_url}')`;

            const text = document.createElement('p');
            text.classList.add('card-text');
            text.textContent = `${item.id} : ${item.author}`;

            card.appendChild(cardImage);
            card.appendChild(text);

            cardContainer.appendChild(card);
            
            
            // 아래 방식은 유지보수가 힘들고 보안이 취약해서 안쓰는방식
            // cardContainer.innerHTML += `<div class = "card">
            //             <div class="card-img" style="background-image: url('${item.download_url}');" ></div><p>${item.id}.${item.author}</p>
            //             </div>`; 
            
        });
        


    } catch (error) {
        console.error(error);
    }

});

