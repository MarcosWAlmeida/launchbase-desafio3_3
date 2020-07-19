const modalOverlay = document.querySelector('.modal_Overlay')
const modalMax = document.querySelector('.modal')
const cursos = document.querySelectorAll('.curso')

for (let curso of cursos) {
    curso.addEventListener("click", function(){
        const get_id = curso.getAttribute("id")
        window.location.href = `/courses/${get_id}`
    })
}










