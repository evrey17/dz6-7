const triggerModal = document.getElementById('btn-get');
const triggerCloseModal = document.querySelector('.modal_close');
const modal = document.querySelector('.modal');
const openModal = () => {
    modal.style.display = 'block';
    document.body.style.overflowY = 'hidden';
}
const closeModal = () => {
    modal.style.display = 'none';
    document.body.style.overflowY = '';
}
modal.onclick = (event) => {
    if (event.target === modal){
        closeModal()
    }
}
triggerModal.onclick = () => openModal()
triggerCloseModal.onclick = () => closeModal()



let swithcerModal = true

window.onscroll = () => {
    const scrollHeight = document.body.scrollHeight
    const scrollPosition = window.scrollY + window.innerHeight
    if (scrollHeight <= scrollPosition && swithcerModal === true) {
        openModal()
        swithcerModal = false
    }
    window.removeEventListener('scroll', openModal)
}







setTimeout(() => openModal(), 10000)