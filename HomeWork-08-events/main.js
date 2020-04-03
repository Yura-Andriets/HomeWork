/**
 * Created by PC on 03.04.2020.
 */

const note = document.querySelectorAll('.key');
const noteDo = document.querySelector('.note-do');
const noteRe = document.querySelector('.note-re');
const noteMi = document.querySelector('.note-mi');
const noteFa = document.querySelector('.note-fa');
const noteSol = document.querySelector('.note-sol');
const noteLya = document.querySelector('.note-lya');
const noteSi = document.querySelector('.note-si');

note.forEach(item => {
    item.addEventListener( "click" , function() {
        const audio = this.querySelector('audio');
        audio.currentTime = 0;
        audio.play();
    });
});

document.addEventListener("keydown" , function (event) {
    note.forEach((item) => {
        if (event.keyCode === parseInt(item.dataset.code))
        {
            if(!(item.classList = "plaing"))
            {item.classList.add("plaing")};
        } else{
            item.classList.remove("plaing");
            item.classList.add("key");
        }
    })

    switch (event.keyCode){
        case 65:
            currentTime = 0;
            noteDo.play();
            break;
        case 83:
            currentTime = 0;
            noteRe.play();
            break;
        case 68:
            currentTime = 0;
            noteMi.play();
            break;
        case 70:
            currentTime = 0;
            noteFa.play();
            break;
        case 71:
            currentTime = 0;
            noteSol.play();
            break;
        case 72:
            currentTime = 0;
            noteLya.play();
            break;
        case 74:
            currentTime = 0;
            noteSi.play();
            break;
    }

})