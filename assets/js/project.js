
const projectTriggers = document.querySelectorAll(".project .trigger")

projectTriggers.forEach((trigger) => {
    trigger.addEventListener('click',(e)=>{
        const project = trigger.parentElement
        const isOpen = project.classList.contains('open')

        if (isOpen) {
            project.classList.remove('open')
         } else{
            project.classList.add('open')
        }
       
   }) 

});



