// ELEMENTS
const bug = document.getElementById('bug');
const dark = document.getElementById('dark');
const dragon = document.getElementById('dragon');
const electric = document.getElementById('electric');
const fairy = document.getElementById('fairy');
const fighter = document.getElementById('fighter');
const fire = document.getElementById('fire');
const flying = document.getElementById('flying');
const ghost = document.getElementById('ghost');
const grass = document.getElementById('grass');
const ground = document.getElementById('ground');
const ice = document.getElementById('ice');
const normal = document.getElementById('normal');
const poison = document.getElementById('poison');
const psychic = document.getElementById('psychic');
const rock = document.getElementById('rock');
const steel = document.getElementById('steel');
const water = document.getElementById('water');
//
const circle1 = document.getElementById('user-circle-span1');
const circle2 = document.getElementById('user-circle-span2');
const circle3 = document.getElementById('user-circle-span3');
const circle4 = document.getElementById('computer-circle-span4');
const circle5 = document.getElementById('computer-circle-span5');
const circle6 = document.getElementById('computer-circle-span6');
const possibleChoices = document.querySelectorAll('.element');
let round = 1
let userChoice
let userChoice2
let userChoice3
let computerChoice
let computerChoice2
let computerChoice3


possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    if(round === 1){
        userChoice = e.target.id
        round1()
    }else if(round === 2){
        userChoice2 = e.target.id
        round2()
    }else if(round === 3){
        userChoice3 = e.target.id
        round3()
    }
    getComputerChoice()
}))
function getComputerChoice(){
}

function round1(){
    if(userChoice === 'bug'){
        circle1.style.backgroundImage = "url('imgs/bug.png')";
        circle1.style.backgroundSize = 'cover'
    }else if(userChoice === 'dark' ){        
        circle1.style.backgroundImage = "url('imgs/dark.png')";
        circle1.style.backgroundSize = 'cover'
    }else if(userChoice === 'dragon'){
        circle1.style.backgroundImage = "url('imgs/dragon.png')";
        circle1.style.backgroundSize = 'cover'
    }else if(userChoice === 'electric'){
        circle1.style.backgroundImage = "url('imgs/electric.png')";
        circle1.style.backgroundSize = 'cover'
    }else if(userChoice === 'fairy'){
        circle1.style.backgroundImage = "url('imgs/fairy.png')";
        circle1.style.backgroundSize = 'cover'
    }else if(userChoice === 'fighter'){
        circle1.style.backgroundImage = "url('imgs/fighter.png')";
        circle1.style.backgroundSize = 'cover'
    }else if(userChoice === 'fire'){
        circle1.style.backgroundImage = "url('imgs/fire.png')";
        circle1.style.backgroundSize = 'cover'
    }else if(userChoice === 'flying'){
        circle1.style.backgroundImage = "url('imgs/flying.png')";
        circle1.style.backgroundSize = 'cover'
    }else if(userChoice === 'ghost'){
        circle1.style.backgroundImage = "url('imgs/ghost.png')";
        circle1.style.backgroundSize = 'cover'
    }else if(userChoice === 'grass'){
        circle1.style.backgroundImage = "url('imgs/grass.png')";
        circle1.style.backgroundSize = 'cover'
    }else if(userChoice === 'ground'){
        circle1.style.backgroundImage = "url('imgs/ground.png')";
        circle1.style.backgroundSize = 'cover'
    }else if(userChoice === 'ice'){
        circle1.style.backgroundImage = "url('imgs/ice.png')";
        circle1.style.backgroundSize = 'cover'
    }else if(userChoice === 'normal'){
        circle1.style.backgroundImage = "url('imgs/normal.png')";
        circle1.style.backgroundSize = 'cover'
    }else if(userChoice === 'poison'){
        circle1.style.backgroundImage = "url('imgs/poison.webp')";
        circle1.style.backgroundSize = 'cover'
    }else if(userChoice === 'psychic'){
        circle1.style.backgroundImage = "url('imgs/psychic.webp')";
        circle1.style.backgroundSize = 'cover'
    }else if(userChoice === 'rock'){
        circle1.style.backgroundImage = "url('imgs/rock.webp')";
        circle1.style.backgroundSize = 'cover'
    }else if(userChoice === 'steel'){
        circle1.style.backgroundImage = "url('imgs/steel.webp')";
        circle1.style.backgroundSize = 'cover'
    }else if(userChoice === 'water'){
        circle1.style.backgroundImage = "url('imgs/water.webp')";
        circle1.style.backgroundSize = 'cover'
    }    
    
    
    let randomNumber = Math.floor(Math.random() * possibleChoices.length + 1);
    switch(randomNumber){
        case 1:
            computerChoice = 'bug'
            circle4.style.backgroundImage = "url('imgs/bug.png')";
            circle4.style.backgroundSize = 'cover'
            break;
        case 2: 
            computerChoice = 'dark'
            circle4.style.backgroundImage = "url('imgs/dark.png')";
            circle4.style.backgroundSize = 'cover'
            break;
        case 3: 
            computerChoice = 'dragon'
            circle4.style.backgroundImage = "url('imgs/dragon.png')";
            circle4.style.backgroundSize = 'cover'
            break;
        case 4: 
            computerChoice = 'electric'
            circle4.style.backgroundImage = "url('imgs/electric.png')";
            circle4.style.backgroundSize = 'cover'
            break;
        case 5: 
            computerChoice = 'fairy'
            circle4.style.backgroundImage = "url('imgs/fairy.png')";
            circle4.style.backgroundSize = 'cover'
            break;        
        case 6: 
            computerChoice = 'fighter'
            circle4.style.backgroundImage = "url('imgs/fighter.png')";
            circle4.style.backgroundSize = 'cover'
            break;
            case 7: 
            computerChoice = 'fire'
            circle4.style.backgroundImage = "url('imgs/fire.png')";
            circle4.style.backgroundSize = 'cover'
            break;
            case 8: 
            computerChoice = 'flying'
            circle4.style.backgroundImage = "url('imgs/flying.png')";
            circle4.style.backgroundSize = 'cover'
            break;
            case 9: 
            computerChoice = 'ghost'
            circle4.style.backgroundImage = "url('imgs/ghost.png')";
            circle4.style.backgroundSize = 'cover'
            break;
            case 10: 
            computerChoice = 'grass'
            circle4.style.backgroundImage = "url('imgs/grass.png')";
            circle4.style.backgroundSize = 'cover'
            break;
            case 11: 
            computerChoice = 'ground'
            circle4.style.backgroundImage = "url('imgs/ground.png')";
            circle4.style.backgroundSize = 'cover'
            break;
            case 12: 
            computerChoice = 'ice'
            circle4.style.backgroundImage = "url('imgs/ice.png')";
            circle4.style.backgroundSize = 'cover'
            break;
            case 13: 
            computerChoice = 'normal'
            circle4.style.backgroundImage = "url('imgs/normal.png')";
            circle4.style.backgroundSize = 'cover'
            break;
            case 14: 
            computerChoice = 'poison'
            circle4.style.backgroundImage = "url('imgs/poison.webp')";
            circle4.style.backgroundSize = 'cover'
            break;
            case 15: 
            computerChoice = 'psychic'
            circle4.style.backgroundImage = "url('imgs/psychic.webp')";
            circle4.style.backgroundSize = 'cover'
            break;
            case 16: 
            computerChoice = 'rock'
            circle4.style.backgroundImage = "url('imgs/rock.webp')";
            circle4.style.backgroundSize = 'cover'
            break;
            case 17: 
            computerChoice = 'steel'
            circle4.style.backgroundImage = "url('imgs/steel.webp')";
            circle4.style.backgroundSize = 'cover'
            break;
            case 18: 
            computerChoice = 'water'
            circle4.style.backgroundImage = "url('imgs/water.webp')";
            circle4.style.backgroundSize = 'cover'
            break;
    }
    round++
}

function round2(){
    if(userChoice2 === 'bug'){
        circle2.style.backgroundImage = "url('imgs/bug.png')";
        circle2.style.backgroundSize = 'cover'
    }else if(userChoice2 === 'dark' ){        
        circle2.style.backgroundImage = "url('imgs/dark.png')";
        circle2.style.backgroundSize = 'cover'
    }else if(userChoice2 === 'dragon'){
        circle2.style.backgroundImage = "url('imgs/dragon.png')";
        circle2.style.backgroundSize = 'cover'
    }else if(userChoice2 === 'electric'){
        circle2.style.backgroundImage = "url('imgs/electric.png')";
        circle2.style.backgroundSize = 'cover'
    }else if(userChoice2 === 'fairy'){
        circle2.style.backgroundImage = "url('imgs/fairy.png')";
        circle2.style.backgroundSize = 'cover'
    }else if(userChoice2 === 'fighter'){
        circle2.style.backgroundImage = "url('imgs/fighter.png')";
        circle2.style.backgroundSize = 'cover'
    }else if(userChoice2 === 'fire'){
        circle2.style.backgroundImage = "url('imgs/fire.png')";
        circle2.style.backgroundSize = 'cover'
    }else if(userChoice2 === 'flying'){
        circle2.style.backgroundImage = "url('imgs/flying.png')";
        circle2.style.backgroundSize = 'cover'
    }else if(userChoice2 === 'ghost'){
        circle2.style.backgroundImage = "url('imgs/ghost.png')";
        circle2.style.backgroundSize = 'cover'
    }else if(userChoice2 === 'grass'){
        circle2.style.backgroundImage = "url('imgs/grass.png')";
        circle2.style.backgroundSize = 'cover'
    }else if(userChoice2 === 'ground'){
        circle2.style.backgroundImage = "url('imgs/ground.png')";
        circle2.style.backgroundSize = 'cover'
    }else if(userChoice2 === 'ice'){
        circle2.style.backgroundImage = "url('imgs/ice.png')";
        circle2.style.backgroundSize = 'cover'
    }else if(userChoice2 === 'normal'){
        circle2.style.backgroundImage = "url('imgs/normal.png')";
        circle2.style.backgroundSize = 'cover'
    }else if(userChoice2 === 'poison'){
        circle2.style.backgroundImage = "url('imgs/poison.webp')";
        circle2.style.backgroundSize = 'cover'
    }else if(userChoice2 === 'psychic'){
        circle2.style.backgroundImage = "url('imgs/psychic.webp')";
        circle2.style.backgroundSize = 'cover'
    }else if(userChoice2 === 'rock'){
        circle2.style.backgroundImage = "url('imgs/rock.webp')";
        circle2.style.backgroundSize = 'cover'
    }else if(userChoice2 === 'steel'){
        circle2.style.backgroundImage = "url('imgs/steel.webp')";
        circle2.style.backgroundSize = 'cover'
    }else if(userChoice2 === 'water'){
        circle2.style.backgroundImage = "url('imgs/water.webp')";
        circle2.style.backgroundSize = 'cover'
    }


    let randomNumber = Math.floor(Math.random() * possibleChoices.length + 1);
    switch(randomNumber){
        case 1:
            computerChoice2 = 'bug'
            circle5.style.backgroundImage = "url('imgs/bug.png')";
            circle5.style.backgroundSize = 'cover'
            break;
        case 2: 
            computerChoice2 = 'dark'
            circle5.style.backgroundImage = "url('imgs/dark.png')";
            circle5.style.backgroundSize = 'cover'
            break;
        case 3: 
            computerChoice2 = 'dragon' 
            circle5.style.backgroundImage = "url('imgs/dragon.png')";
            circle5.style.backgroundSize = 'cover'
            break;
        case 4: 
            computerChoice2 = 'electric'
            circle5.style.backgroundImage = "url('imgs/electric.png')";
            circle5.style.backgroundSize = 'cover'
            break;
        case 5: 
            computerChoice2 = 'fairy'
            circle5.style.backgroundImage = "url('imgs/fairy.png')";
            circle5.style.backgroundSize = 'cover'
            break;        
        case 6: 
            computerChoice2 = 'fighter'
            circle5.style.backgroundImage = "url('imgs/fighter.png')";
            circle5.style.backgroundSize = 'cover'
            break;
        case 7: 
            computerChoice2 = 'fire'
            circle5.style.backgroundImage = "url('imgs/fire.png')";
            circle5.style.backgroundSize = 'cover'
            break;
        case 8: 
            computerChoice2 = 'flying'
            circle5.style.backgroundImage = "url('imgs/flying.png')";
            circle5.style.backgroundSize = 'cover'
            break;
        case 9: 
            computerChoice2 = 'ghost'
            circle5.style.backgroundImage = "url('imgs/ghost.png')";
            circle5.style.backgroundSize = 'cover'
            break;
        case 10: 
            computerChoice2 = 'grass'
            circle5.style.backgroundImage = "url('imgs/grass.png')";
            circle5.style.backgroundSize = 'cover'
            break;
        case 11: 
            computerChoice2 = 'ground'
            circle5.style.backgroundImage = "url('imgs/ground.png')";
            circle5.style.backgroundSize = 'cover'
            break;
        case 12: 
            computerChoice2 = 'ice'
            circle5.style.backgroundImage = "url('imgs/ice.png')";
            circle5.style.backgroundSize = 'cover'
            break;
        case 13: 
            computerChoice2 = 'normal'
            circle5.style.backgroundImage = "url('imgs/normal.png')";
            circle5.style.backgroundSize = 'cover'
            break;
        case 14: 
            computerChoice2 = 'poison'
            circle5.style.backgroundImage = "url('imgs/poison.webp')";
            circle5.style.backgroundSize = 'cover'
            break;
        case 15: 
            computerChoice2 = 'psychic'
            circle5.style.backgroundImage = "url('imgs/psychic.webp')";
            circle5.style.backgroundSize = 'cover'
            break;
        case 16: 
            computerChoice2 = 'rock'
            circle5.style.backgroundImage = "url('imgs/rock.webp')";
            circle5.style.backgroundSize = 'cover'
            break;
        case 17: 
            computerChoice2 = 'steel'
            circle5.style.backgroundImage = "url('imgs/steel.webp')";
            circle5.style.backgroundSize = 'cover'
            break;
        case 18: 
            computerChoice2 = 'water'
            circle5.style.backgroundImage = "url('imgs/water.webp')";
            circle5.style.backgroundSize = 'cover'
            break;
    }
    round++
}

function round3(){
    if(userChoice3 === 'bug'){
        circle3.style.backgroundImage = "url('imgs/bug.png')";
        circle3.style.backgroundSize = 'cover'
    }else if(userChoice3 === 'dark' ){        
        circle3.style.backgroundImage = "url('imgs/dark.png')";
        circle3.style.backgroundSize = 'cover'
    }else if(userChoice3 === 'dragon'){
        circle3.style.backgroundImage = "url('imgs/dragon.png')";
        circle3.style.backgroundSize = 'cover'
    }else if(userChoice3 === 'electric'){
        circle3.style.backgroundImage = "url('imgs/electric.png')";
        circle3.style.backgroundSize = 'cover'
    }else if(userChoice3 === 'fairy'){
        circle3.style.backgroundImage = "url('imgs/fairy.png')";
        circle3.style.backgroundSize = 'cover'
    }else if(userChoice3 === 'fighter'){
        circle3.style.backgroundImage = "url('imgs/fighter.png')";
        circle3.style.backgroundSize = 'cover'
    }else if(userChoice3 === 'fire'){
        circle3.style.backgroundImage = "url('imgs/fire.png')";
        circle3.style.backgroundSize = 'cover'
    }else if(userChoice3 === 'flying'){
        circle3.style.backgroundImage = "url('imgs/flying.png')";
        circle3.style.backgroundSize = 'cover'
    }else if(userChoice3 === 'ghost'){
        circle3.style.backgroundImage = "url('imgs/ghost.png')";
        circle3.style.backgroundSize = 'cover'
    }else if(userChoice3 === 'grass'){
        circle3.style.backgroundImage = "url('imgs/grass.png')";
        circle3.style.backgroundSize = 'cover'
    }else if(userChoice3 === 'ground'){
        circle3.style.backgroundImage = "url('imgs/ground.png')";
        circle3.style.backgroundSize = 'cover'
    }else if(userChoice3 === 'ice'){
        circle3.style.backgroundImage = "url('imgs/ice.png')";
        circle3.style.backgroundSize = 'cover'
    }else if(userChoice3 === 'normal'){
        circle3.style.backgroundImage = "url('imgs/normal.png')";
        circle3.style.backgroundSize = 'cover'
    }else if(userChoice3 === 'poison'){
        circle3.style.backgroundImage = "url('imgs/poison.webp')";
        circle3.style.backgroundSize = 'cover'
    }else if(userChoice3 === 'psychic'){
        circle3.style.backgroundImage = "url('imgs/psychic.webp')";
        circle3.style.backgroundSize = 'cover'
    }else if(userChoice3 === 'rock'){
        circle3.style.backgroundImage = "url('imgs/rock.webp')";
        circle3.style.backgroundSize = 'cover'
    }else if(userChoice3 === 'steel'){
        circle3.style.backgroundImage = "url('imgs/steel.webp')";
        circle3.style.backgroundSize = 'cover'
    }else if(userChoice3 === 'water'){
        circle3.style.backgroundImage = "url('imgs/water.webp')";
        circle3.style.backgroundSize = 'cover'
    }

    let randomNumber = Math.floor(Math.random() * possibleChoices.length + 1);
    switch(randomNumber){
        case 1:
            computerChoice3 = 'bug'
            circle6.style.backgroundImage = "url('imgs/bug.png')";
            circle6.style.backgroundSize = 'cover'
            break;
        case 3: 
            computerChoice3 = 'dark'
            circle6.style.backgroundImage = "url('imgs/dark.png')";
            circle6.style.backgroundSize = 'cover'
            break;
        case 3: 
            computerChoice3 = 'dragon' 
            circle6.style.backgroundImage = "url('imgs/dragon.png')";
            circle6.style.backgroundSize = 'cover'
            break;
        case 4: 
            computerChoice3 = 'electric'
            circle6.style.backgroundImage = "url('imgs/electric.png')";
            circle6.style.backgroundSize = 'cover'
            break;
        case 5: 
            computerChoice3 = 'fairy'
            circle6.style.backgroundImage = "url('imgs/fairy.png')";
            circle6.style.backgroundSize = 'cover'
            break;        
        case 6: 
            computerChoice3 = 'fighter'
            circle6.style.backgroundImage = "url('imgs/fighter.png')";
            circle6.style.backgroundSize = 'cover'
            break;
        case 7: 
            computerChoice3 = 'fire'
            circle6.style.backgroundImage = "url('imgs/fire.png')";
            circle6.style.backgroundSize = 'cover'
            break;
        case 8: 
            computerChoice3 = 'flying'
            circle6.style.backgroundImage = "url('imgs/flying.png')";
            circle6.style.backgroundSize = 'cover'
            break;
        case 9: 
            computerChoice3 = 'ghost'
            circle6.style.backgroundImage = "url('imgs/ghost.png')";
            circle6.style.backgroundSize = 'cover'
            break;
        case 10: 
            computerChoice3 = 'grass'
            circle6.style.backgroundImage = "url('imgs/grass.png')";
            circle6.style.backgroundSize = 'cover'
            break;
        case 11: 
            computerChoice3 = 'ground'
            circle6.style.backgroundImage = "url('imgs/ground.png')";
            circle6.style.backgroundSize = 'cover'
            break;
        case 12: 
            computerChoice3 = 'ice'
            circle6.style.backgroundImage = "url('imgs/ice.png')";
            circle6.style.backgroundSize = 'cover'
            break;
        case 13: 
            computerChoice3 = 'normal'
            circle6.style.backgroundImage = "url('imgs/normal.png')";
            circle6.style.backgroundSize = 'cover'
            break;
        case 14: 
            computerChoice3 = 'poison'
            circle6.style.backgroundImage = "url('imgs/poison.webp')";
            circle6.style.backgroundSize = 'cover'
            break;
        case 15: 
            computerChoice3 = 'psychic'
            circle6.style.backgroundImage = "url('imgs/psychic.webp')";
            circle6.style.backgroundSize = 'cover'
            break;
        case 16: 
            computerChoice3 = 'rock'
            circle6.style.backgroundImage = "url('imgs/rock.webp')";
            circle6.style.backgroundSize = 'cover'
            break;
        case 17: 
            computerChoice3 = 'steel'
            circle6.style.backgroundImage = "url('imgs/steel.webp')";
            circle6.style.backgroundSize = 'cover'
            break;
        case 18: 
            computerChoice3 = 'water'
            circle6.style.backgroundImage = "url('imgs/water.webp')";
            circle6.style.backgroundSize = 'cover'
            break;
    }
    round++
}