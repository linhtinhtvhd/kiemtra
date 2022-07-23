const input = document.querySelector('.input-link')
const btn = document.querySelector('.btn-link')
const link = document.querySelector('.link-a')
const btns = document.querySelectorAll('.btn')
const getlink = document.querySelector('.get-link')
const text =document.querySelector('.link-a')

function getLink(e){
    e.preventDefault()
    const a = input.value
    link.href= a
    getlink.classList.add('act')
    text.innerText=`shrtco.de/${Math.random().toString(16).substr(2, 8)
    }`
}
btn.addEventListener('click',getLink)
for(let i=0;i<btns.length;i++){
    
    btns[i].addEventListener('click',(e)=>{
        for(let j=0;j<btns.length;j++){
            btns[j].classList.remove('active')
        }
        e.preventDefault()
        e.target.classList.add('active')
    })
}
