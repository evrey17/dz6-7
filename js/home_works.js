//gmail

 const gmailInput = document.getElementById("gmail_input")
 const gmailButton= document.getElementById("gmail_button")
 const gmailResult = document.getElementById("gmail_result")
 
 const regExp = /[a-zA-Z0-9]@gmail.com$/
 
 gmailButton.onclick = () => {
    if (regExp.test(gmailInput.value)){
        gmailResult.innerHTML = 'OK'
        gmailResult.style.color = 'green'
    } else {
        gmailResult.innerHTML = "Not OK"
        gmailResult.style.color = 'red'
    }
 }


 //moveBlock

 const childBlock = document.querySelector(".child_block")
 let positionX = 0, positionY = 0

const block = () => {
   if(positionX <= 450 && positionY === 0){
       positionX +=10
       childBlock.style.left = positionX + 'px'
       childBlock.style.rotate = '90deg'
       setTimeout(block, 0)
   }else if(positionY <= 450 && positionX > 440){
       positionY+=10
       childBlock.style.top = positionY + 'px'
       childBlock.style.rotate = '180deg'
       setTimeout(block, 0)

   }else if( positionX >= 0){
       positionX -=10
       childBlock.style.left = positionX + 'px'
       setTimeout(block, 0)
       childBlock.style.rotate = '270deg'

   }else if(positionY >= 0){
       positionY -=10
       childBlock.style.top = positionY + 'px'
       setTimeout(block, 0)
       childBlock.style.rotate = '3600deg'

   }
}
block()

//timer
const start = document.querySelector("#start")
const stop = document.querySelector("#stop")
const reset = document.querySelector("#reset")
 const seconds = document.querySelector("#seconds")
 let counter = 0
 seconds.innerHTML = `<span>${counter}</span>`
 let switcher = true
 start.onclick = () => {

    if (switcher === true){
        const timerId = setInterval(() => {
            if (counter < 999){
                counter+=1
                seconds.innerHTML = `<span>${counter}</span>`
            }
        },1000)
        stop.onclick = () => {
            clearInterval(timerId)
            switcher =true
        }
        reset.onclick =() => {
            counter =0
            seconds.innerHTML = `<span>${counter}</span>`
            switcher =true

        }
        switcher =false
    }

 }

//create cards new xml
const charactersContainer = document.querySelector('.characters_container')
const xml = new XMLHttpRequest()
xml.open('GET', '../data/persons.json')
xml.setRequestHeader('Content-type', 'application/json')
xml.send()
xml.addEventListener('load', () => {
    const response = JSON.parse(xml.response)
    response.forEach((person) => {
        const card = document.createElement('div')
        card.className = 'card'
        card.innerHTML = `
            <span>${person.name}</span>
            <span>${person.Age}</span>
            <span>${person.bio}</span>
            <img src="${person.person_photo}" alt="">
            <button >LIKE</button>
        `
        charactersContainer.append(card)
    });
})
const asyncData = async () => {
    const response = await axios('wefwegoiueroifd')
    console.log(response.data)
}

//home work 4 new xml Запрос 
const request = new XMLHttpRequest()
request.open('GET', '../data/persons.json')
request.setRequestHeader('Content-type', 'application/json')
request.send()
request.onload = () => {
    const response = JSON.parse(request.response)
    console.log(response);
    
} 
// // Persons
// document.addEventListener('DOMContentLoaded',()=>{
//     const charactersContainer=document.querySelector('.characters_container');
//     const request=new XMLHttpRequest()
//     request.open('GET', 'data/persons.json');
//     request.setRequestHeader('Content-type','application/json');
//     request.send();

//     request.onload=()=>{
//         if (request.status>=200 && request.status<400) {
//             console.log('Response text:', request.responseText);
//             const characters=JSON.parse(request.responseText);

//             characters.forEach((character)=>{
//                 const characterBlock=document.createElement('div');
//                 characterBlock.classList.add('character_block');

//                 characterBlock.innerHTML =`
//                 <div class="character_photo">
//                     <img src="${character.photo} 
//                     alt="${character.name}"/>
                
//                 </div>
//                 <h2>${character.name}</h2>
//                 <p id="age_part" Age:${character.age}</p>
//                 <p id="bio_part" Bio:${character.bio}</p>
    
                
//                 `;
//                 const h2Element=characterBlock.querySelector('h2');
//                 const pElements=characterBlock.querySelectorAll('p');

//                 if (h2Element){
//                     h2Element.style.color='white';
//                 }
//                 pElements.forEach(p=>{
//                     p.style.color='white';
//                 });
//                 charactersContainer.append(characterBlock);
//             }) ;
//         } else {
//             console.error('Request failed', request.status);
//         }
//     };
//     request.onerror = () =>{
//         console.error('Request fully failed');  
//     };
// });

