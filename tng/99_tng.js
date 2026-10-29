const form = document.querySelector('form');

const baseURL = 'https://picsum.photos';
const path = '/v2/list';
let page = 0;

const cardContainer = document.querySelector('.card-container');

const delay = (str)=>{
    return new Promise((resolve)=>{
        setTimeout(resolve,1500);
    })
}

form.addEventListener("submit",async(e)=>{
    e.preventDefault();
    try {
        await delay();
        page++;
        console.log(page);
        const url = `${baseURL}${path}?page=${page}&limit=${3}`;
        const response = await axios.get(url);
        await response.data.forEach((item) => {
            
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
        });

    } catch (error) {
            
        
    }
    
    
    
});

form.addEventListener("reset",()=>{
    page = 0;
    cardContainer.textContent = '';

});

