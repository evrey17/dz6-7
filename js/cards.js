const cards_item = document.querySelector('.cards_item')
const getAsyncData = async () => {
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await response.json()
        data.forEach((item) => {
            const card = document.createElement('div')
            card.className = 'card'
            card.innerHTML = `
                <h3>${item.title}</h3>
                <p>${item.body}</p>
            `
            cards_item.append(card)
        });

    }catch(e) {
        console.log(e);  
    }
}
getAsyncData()