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

const xmlGetAsyncData =async () => {
   try{
    const response = await fetch('../data/persons.json')
    const data = await response.json()
    console.log(data)
    data.forEach((person) => {
        console.log(person)
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

   }catch(e){
    console.log(e)
   }
}

xmlGetAsyncData()