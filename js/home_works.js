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

 const childBlock = document.querySelector(".child_block")
 let position = 0
 const width = 449

const block = () => {
    if (position < width){
        position++
        childBlock.style.left = `${position}px`
        // requestAnimationFrame(block)
        
    }
    setTimeout(block, 1)
}
block()

