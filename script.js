const linki = document.querySelectorAll('.navigation > li > a');

const messageBlock = document.querySelector('.message-block');
const message = messageBlock.querySelector('.message')
const form = document.querySelector('form');
const closeButton = document.querySelector('.close-btn');
const textar = form.querySelector('.input-area');
const subject = form.querySelector('.input-text');

const tabs = document.querySelector('.blok_button_portfolio');
let pictures = document.querySelector('.pictures');

const arrowLeft = document.querySelectorAll('.arrow_left');
const arrowRight = document.querySelectorAll('.arrow_right');

// header

for (let i = 0; i< linki.length; i++){
    linki[i].onclick = (event) =>{
        event.preventDefault();
        if (i===0){
            window.scrollTo(0,0);
        } else if (i===1) {
            window.scrollTo(0,600);
        } else if (i===2) {
            window.scrollTo(0,1100);
        } else if (i===3) {
            window.scrollTo(0,1969);
        } else {
            window.scrollTo(0,2702);
        }

    }
}

document.addEventListener('scroll', onScroll);

function onScroll(event){
    const curPos = window.scrollY;
    const sections = document.querySelectorAll('.anchor');
    const links = document.querySelectorAll('.navigation > li > a');
    sections.forEach((el)=>{
       console.log(el.offsetTop-89);
        if ((el.offsetTop-89) <= curPos && (el.offsetTop-89) + el.offsetHeight > curPos){
            links.forEach((a) =>{
                a.classList.remove('active');
                if (el.getAttribute('id') === a.getAttribute('href').substring(1)){
                    a.classList.add('active');
                }
            })
            
        }
    })
}

// slider

document.querySelector('.onv').onclick = () => {
    document.querySelector('.ofv').classList.remove('hidden');
    document.querySelector('.onv').classList.add('hidden');
    document.querySelector('.ofv').onclick = () => {
        document.querySelector('.onv').classList.remove('hidden');
        document.querySelector('.ofv').classList.add('hidden');
    }
}

document.querySelector('.ong').onclick = () => {
    document.querySelector('.ofg').classList.remove('hidden');
    document.querySelector('.ong').classList.add('hidden');
    document.querySelector('.ofg').onclick = () => {
        document.querySelector('.ong').classList.remove('hidden');
        document.querySelector('.ofg').classList.add('hidden');
    }
}


function changeSlider(arrow) {
    arrow.onclick = () => {
        document.querySelector('.slader1').classList.toggle('hidden');
        document.querySelector('.slad2').classList.toggle('hidden');
    }
}
for (let i = 0; i < arrowLeft.length; i++) {
    changeSlider(arrowLeft[i]);
}

for (let i = 0; i < arrowRight.length; i++) {
    changeSlider(arrowRight[i]);
}

// portfolio

tabs.onclick = (event) => {
    if (event.target !== tabs) {
        tabs.querySelectorAll('button').forEach(el => el.classList.remove('active_button'));
        event.target.classList.add('active_button');
        let arr = pictures.querySelectorAll('img');
        let pic = Array.from(arr).map(p => { return { src: p.src, alt: p.alt }; })
        pic.push(pic.shift());
        for (let i = 0; i < arr.length; i++) {
            arr[i].src = pic[i].src;
            arr[i].alt = pic[i].alt;
        }
    }
}

pictures.onclick = (event) => {
    if (event.target !== pictures) {
        pictures.querySelectorAll('img').forEach(el => el.classList.remove('frame'));
        event.target.classList.add('frame');
    }
}

// form

form.onsubmit = (event) => {
    event.preventDefault();
    messageBlock.classList.remove('hidden');

    if (subject.value !== '') {
        message.querySelector('.tema').textContent = subject.value;
    } else {
        message.querySelector('.topic_of').textContent = 'Без темы';
    }
    if (textar.value !== '') {
        message.querySelector('.description').textContent = textar.value;
    } else {
        message.querySelector('.description_of').textContent = 'Без описания';
    }

    closeButton.onclick = () => {
        messageBlock.classList.add('hidden');
        textar.value = '';
        subject.value = '';
        form.querySelector('.input-name').value = '';
        form.querySelector('.input-mail').value = '';
    }
}