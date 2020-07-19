const modalOverlay = document.querySelector('.modal_Overlay')
const modalMax = document.querySelector('.modal')
const cursos = document.querySelectorAll('.curso')

for (let curso of cursos) {
    curso.addEventListener("click", function(){
        const get_id = curso.getAttribute("id")
        modalOverlay.classList.add('active')
        modalOverlay.querySelector('iframe').src = ` https://rocketseat.com.br/${get_id}`
    })
}

document.querySelector('.close-modal').addEventListener("click" , function(){
    modalOverlay.classList.remove('active')
})

document.querySelector('.close-modal').addEventListener("click" , function(){
    modalMax.classList.remove('maximize')
})

window.onclick = function(event) {
    if (event.target == modalOverlay) {
        modalOverlay.classList.remove('active')
    }
}



document.querySelector('.maximize-modal').addEventListener("click", function(){
    const contain = modalMax.classList.contains('maximize')
    if (!contain) {
        modalMax.classList.add('maximize')
    } else {
        modalMax.classList.remove('maximize')
    }
})




