let accHeader= document.querySelectorAll('.footer-block__heading')
accHeader.forEach((acc)=>{
    acc.addEventListener('click',function(){
        this.parentElement.classList.toggle('active')
    })
})