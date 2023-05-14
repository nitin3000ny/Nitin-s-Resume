const btn=document.getElementById('toggle');
const menu=document.getElementById('nav-links');
btn.addEventListener('click',()=>{
    menu.classList.toggle('active');
})
