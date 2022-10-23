document.addEventListener('DOMContentLoaded', () => {
    
    const cardArray = [
       {
            name:'centreville', 
            img: './img/centreville.jpg'
        }, 
       {
            name:'centreville', 
            img: './img/centreville.jpg'
        }, 
       {
            name:'ladalle', 
            img: './img/ladalle.jpg'
        }, 
       {
            name:'ladalle', 
            img: './img/ladalle.jpg'
        }, 
       {
            name:'maire', 
            img: './img/maire.jpg'
        }, 
       {
            name:'maire', 
            img: './img/maire.jpg'
        }, 
       {
            name:'mediatheque', 
            img: './img/mediatheque.jpg'
        }, 
       {
            name:'mediatheque', 
            img: './img/mediatheque.jpg'
        }, 
       {
            name:'piscine', 
            img: './img/piscine.jpg'
        }, 
       {
            name:'piscine', 
            img: './img/piscine.jpg'
        }, 
       {
            name:'police', 
            img: './img/police.jpg'
        }, 
       {
            name:'police', 
            img: './img/police.jpg'
        }
        ]

cardArray.sort(() => 0.5 - Math.random());

const grid = document.querySelector('.grid');
const resultDisplay = document.querySelector('#result');
var cardsChosen = [];
var cardsChosenId = [];
var cardsWon = [];

//create your board

function createBoard(){
    for (let i = 0; i < cardArray.length; i++ ){
        var card = document.createElement('img');
        card.setAttribute('src','img/blank.jpg');
        card.setAttribute('data-id', i);
        card.addEventListener('click',flipcard);
        grid.appendChild(card);
    }
}


// check for matches
function checkForMatch(){
    var cards = document.querySelectorAll('img');
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];

    if(cardsChosen[0] === cardsChosen[1]){
        alert('You found a match');
        cards[optionOneId].setAttribute('src','img/white.jpg');
        cards[optionTwoId].setAttribute('src','img/white.jpg');
        cardsWon.push(cardsChosen);
    }else{
        cards[optionOneId].setAttribute('src', 'img/blank.jpg');
        cards[optionTwoId].setAttribute('src', 'img/blank.jpg');
        alert('Sorry,try again');
    }

    cardsChosen = [];
    cardsChosenId = [];
    resultDisplay.textContent = cardsWon.length; 
    if(cardsWon.length === cardArray.length/2){
        resultDisplay.textContent = 'Félicitation Bienvenue à Val de Reuil !!!';
    }

}


// flip your card
function flipcard(){
    var cardId = this.getAttribute('data-id');
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute('src',cardArray[cardId].img);
    if(cardsChosen.length === 2){
        setTimeout(checkForMatch, 500);
    }
}

createBoard();


























})