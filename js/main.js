let accordion = document.getElementsByClassName('accordion');
let pst = document.getElementsByClassName('pst');


for(let i=0 ; i<accordion.length; i++){
    accordion[i].addEventListener('click', function (){
        accordion[i].classList.toggle('active')
        if(pst[i].style.height == 0) {
            pst[i].style.height = "auto"
        } else {
            pst[i].style.height = null
        }
    }) 
}


let thumbnail = document.querySelectorAll('.thumbnail img')
let preview = document.querySelector('.preview img')

console.log(thumbnail);

for (let i = 0 ; i < thumbnail.length; i++){
    thumbnail[i].addEventListener('click', function (){
        preview.src = thumbnail[i].src
    })
}

let counter = document.getElementsByClassName('counter');


for (let i = 0 ; i < counter.length ; i++) {

    let updateCount = ()=> {

        let target = +counter[i].getAttribute('data-target');
        let c = +counter[i].innerText;
        let speed = target/100;

        if (c < target){
            counter[i].innerText = c + speed;
            setTimeout(updateCount , 2);
        } else{
            c.innerText = target;
        }
    }
    updateCount();
}