// phone checker

const phoneInput = document.querySelector('#phone_input')
const phoneCheckt = document.querySelector('#phone_button')
const phoneResult = document.querySelector('#phone_result')

const regExp = /\+996 \d{3} \d{2}-\d{2}-\d{2}$/

phoneCheckt.onclick = () =>{
    if (regExp.test(phoneInput.value)){
        phoneResult.innerHTML = 'ok'
        phoneResult.style.color = 'green'
    }else{
        phoneResult.innerHTML = 'NOT OK'
        phoneResult.style.color= 'red'
    }
}

//TAB SLIDER
const tabContent = document.querySelectorAll('.tab_content_block')
const tabs =document.querySelectorAll('.tab_content_item')
const tabsParent =document.querySelector('.tab_content_items')


const hideTabContent = () => {
    tabContent.forEach( (item) => {
        item.style.display = 'none'
    })
    tabs.forEach( (item) => {
        item.classList.remove('tab_content_item_active')
    })
}


const showTabContent = (index = 0) => {
    tabContent[index].style.display = 'block'
    tabs[index].classList.add('tab_content_item_active')
}


hideTabContent()
showTabContent()


tabsParent.onclick = (event) => {
    const target = event.target
    if (event.target.classList.contains('tab_content_item')){
        tabs.forEach( (item, i) => {
            if (event.target === item) {
                hideTabContent(i)
                showTabContent(i)

            }
        })
    }
}
let slideIndex = 0
const slideTime = () =>{
    slideIndex++
    if(slideIndex>4){
        slideIndex=0
    }
    hideTabContent()
    showTabContent(slideIndex)
}

setInterval(slideTime , 3000)


//kiss - keep it short and simple

const som = document.querySelector('#som');
const usd = document.querySelector('#usd');
const eur = document.querySelector('#eur');

const fetchData = async () => {
    try {
        const response = await fetch("../data/converter.json");
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
};

const convert = async (elem, target, target2) => {
    elem.oninput = async () => {
        try {
            const response = await fetchData();

            target.forEach(e => {
                if (target2 === 'som') {
                    e.value = (elem.value / response[e.id]).toFixed(2);
                } else if (e === som) {
                    e.value = (elem.value * response[elem.id]).toFixed(2);
                } else {
                    e.value = ((elem.value * response[elem.id]) / response[e.id]).toFixed(2);
                }
            });

            if (elem.value === '') {
                target.forEach(e => e.value = '');
                elem.value === '' && (target.forEach(e => e.value = ''));
            }
        } catch (error) {
            console.error("Conversion error:", error);
        }
    };
};

convert(som, [usd, eur]);
convert(usd, [som, eur]);
convert(eur, [som, usd]);


//CARD SWITCHER

const card = document.querySelector('.card')
const btnPrev = document.querySelector('#btn-prev')
const btnNext = document.querySelector('#btn-next')
let count = 0

const requestFetch = async () => {
    try{
        const response = await fetch(`http://jsonplaceholder.typicode.com/todos/${count}`)
        const data = await response.json()
        card.innerHTML = `
            <p>${data.title}</p>
            <p>${data.completed}</p>
            <span>${data.id}</span>
            `
    }catch (e) {
        console.log(e)
    }
}
btnNext.onclick = () => {
    if (count++ && count >= 201){
        count = 1
    }
    requestFetch()
}
btnPrev.onclick = () => {
    if (count-- && count <= 0){
     count = 200
    }
    requestFetch()
}

const getPosts = async () => {
    try {
        const response = await fetch( 'https://jsonplaceholder.typicode.com/posts' )
        const data = await response.json()
        console.log('posts', data)
    }catch (e) {
        alert('ERROR')
    }
}
getPosts()

//WEATHER
const cityNameInput = document.querySelector('.cityName')
const citySpan = document.querySelector('.city')
const tempSpan = document.querySelector('.temp')

const baseUrl = 'http://api.openweathermap.org/data/2.5/weather'
const apiKey = 'e417df62e04d3b1b111abeab19cea714'
cityNameInput.oninput = async (event) => {
    try {
        const response = await fetch(`${baseUrl}?q=${event.target.value}&appid=${apiKey}`)
        const data = await response.json()

        citySpan.innerHTML = data.name ? data.name : 'Город не найден...'
        tempSpan.innerHTML = data?.main?.temp ? Math.round(data.main.temp - 273) + '&deg;c' : '...'
    } catch (e) {
        alert(e,'ERROR')
    }
}