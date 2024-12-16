const humburger=document.querySelector('.imburger'); 
const ul= document.querySelector('ul');
humburger.addEventListener('click' , ()=>{
    ul.classList.toggle('ham_active');
})