document.querySelector('.fa-bars').addEventListener('click',()=>{
    document.querySelector('nav').style.display = 'flex';
})

document.querySelector('.fa-xmark').addEventListener('click',()=>{
    document.querySelector('nav').style.display = 'none';
})

document.querySelectorAll('.Ques_block .fa-solid').forEach(icon =>{
    icon.addEventListener('click',(e)=>{
        if(e.target.classList[1]=='fa-plus'){
            e.target.parentElement.nextElementSibling.style.cssText = 'display:block'
            e.target.classList.remove('fa-plus');
            e.target.classList.add('fa-minus');
        }else{
            e.target.parentElement.nextElementSibling.style.cssText = 'display:none';
            e.target.classList.remove('fa-minus');
            e.target.classList.add('fa-plus');
        }
    })
})

