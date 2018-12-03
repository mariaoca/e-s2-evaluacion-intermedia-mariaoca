'use strict'

const number = document.querySelector ('#firstnumber');
const btnOne = document.querySelector ('.btn_one');
const btnTwo = document.querySelector ('.btn_two');

function writeNumber (e) {
    btnOne.innerHTML = number.value;
    const r = getRandomNumber;
    console.log ('Has ganado');
    if(r<= 2){
        console.log ('Es demasiado bajo');
    } if (r >= 60){
        console.log ('Es demasiado alto ');
    }
}

btnOne.addEventListener ('click',writeNumber);

    

// number.adivina = function (a) {
//     if(this.number === this.number){
//         console.log('Has ganado!');
//     } if (this.number <= 2){
//         console.log('Es demasiado bajo');
//     } else (this.number <= 100) {
//         console.log( 'Es demasiado alto');
//     }
// }

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
  }
  