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
const resultSpan1 = document.getElementById('result-span-1');
const resultSpan2 = document.getElementById('result-span-2');
const resultSpan3 = document.getElementById('result-span-3');
const finalResultSpan = document.getElementById('final-result')

let round = 1
let userChoice
let userChoice2
let userChoice3
let computerChoice
let computerChoice2
let computerChoice3
let result1
let result2
let result3
let userWins = 0
let computerWins = 0
let draws = 0
let finalResultValue


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
        finalResult()
    }
}))

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

    // Normal Type
    if(userChoice === 'normal'){
        if(computerChoice === 'rock' || computerChoice === 'steel'){
            result1 = 'Loss'
        }else{
            result1 = 'Draw'
        }
    }


    // Fight Type
    if(userChoice === 'fighter'){
        if(computerChoice === 'normal' || computerChoice === 'rock' || computerChoice === 'steel' || computerChoice === 'ice' || computerChoice === 'dark'){
            result1 = 'Win'
        }else if(computerChoice === 'flying' || computerChoice === 'poison' || computerChoice === 'bug' || computerChoice === 'psychic' || computerChoice === 'fairy'){
            result1 = 'Loss'
        }else{
            result1 = 'Draw'
        }
    }

    // Flying type
    if(userChoice === 'flying'){
        if(computerChoice === 'fighter' || computerChoice === 'bug' || computerChoice === 'grass'){
            result1 = 'Win'
        }else if(computerChoice === 'rock' || computerChoice === 'steel' || computerChoice === 'electric'){
            result1 = 'Loss'
        }else{
            result1 = 'Draw'
        }
    }

    // Poison type
    if(userChoice === 'poison'){
        if(computerChoice === 'grass' || computerChoice === 'fairy'){
            result1 = 'Win'
        }else if(computerChoice === 'poison' || computerChoice === 'ground' || computerChoice === 'rock' || computerChoice === 'ghost' || computerChoice === 'steel'){
            result1 = 'Loss'
        }else{
            result1 = 'Draw'
        }
    }

    // Ground type
    if(userChoice === 'ground'){
        if(computerChoice === 'flying' || computerChoice === 'bug' || computerChoice === 'grass'){
            result1 = 'Loss'
        }else if(computerChoice === 'poison' || computerChoice === 'rock' || computerChoice === 'steel' || computerChoice === 'fire' || computerChoice === 'electric'){
            result1 = 'Win'
        }else{
            result1 = 'Draw'
        }
    }
    
    // Rock
    if(userChoice === 'rock'){
        if(computerChoice === 'flying' || computerChoice === 'bug' || computerChoice === 'fire' || computerChoice === 'ice'){
            result1 = 'Win'
        }else if(computerChoice === 'fighter' || computerChoice === 'ground' || computerChoice === 'steel'){
            result1 = 'Loss'
        }else{
            result1 = 'Draw'
        }
    }

    // Bug
    if(userChoice === 'bug'){
        if(computerChoice === 'grass' || computerChoice === 'psychic' || computerChoice === 'dark'){
            result1 = 'Win'
        }else if(computerChoice === 'fighter' || computerChoice === 'flying' || computerChoice === 'poison' || computerChoice === 'ghost' || computerChoice === 'steel' || computerChoice === 'fire' || computerChoice === 'fairy'){
            result1 = 'Loss'
        }else{
            result1 = 'Draw'
        }
    }

    // Ghost
    if(userChoice === 'ghost'){
        if(computerChoice === 'psychic'){
            result1 = 'Win'
        }else if(computerChoice === 'dark'){
            result1 = 'Loss'
        }else{
            result1 = 'Draw'
        }
    }

    // Steel
    if(userChoice === 'steel'){
        if(computerChoice === 'rock' || computerChoice === 'ice' || computerChoice === 'fairy'){
            result1 = 'Win'
        }else if(computerChoice === 'steel' || computerChoice === 'fire' || computerChoice === 'water' || computerChoice === 'electric'){
            result1 = 'Loss'
        }else{
            result1 = 'Draw'
        }
    } 

    // Fire
    if(userChoice === 'fire'){
        if(computerChoice === 'bug' || computerChoice === 'steel' || computerChoice === 'grass' || computerChoice === 'ice'){
            result1 = 'Win'
        }else if(computerChoice === 'rock' || computerChoice === 'water' || computerChoice === 'dragon'){
            result1 = 'Loss'
        }else{
            result1 = 'Draw'
        }
    }

    // Water
    if(userChoice === 'water'){
        if(computerChoice === 'ground' || computerChoice === 'rock' || computerChoice === 'fire'){
            result1 = 'Win'
        }else if(computerChoice === 'dragon' || computerChoice === 'water' || computerChoice === 'grass'){
            result1 = 'Loss'
        }else{
            result1 = 'Draw'
        }
    }

    // Grass
    if(userChoice === 'grass'){
        if(computerChoice === 'ground' || computerChoice === 'rock' || computerChoice === 'water'){
            result1 = 'Win'
        }else if(computerChoice === 'poison' || computerChoice === 'flying' || computerChoice === 'bug' || computerChoice === 'steel' || computerChoice === 'fire' || computerChoice === 'dragon' || computerChoice === 'grass'){
            result1 = 'Loss'
        }else{
            result1 = 'Draw'
        }
    }

    // Electric
    if(userChoice === 'electric'){
        if(computerChoice === 'flying' || computerChoice === 'water'){
            result1 = 'Win'
        }else if(computerChoice === 'ground' || computerChoice === 'grass' || computerChoice === 'electric' || computerChoice === 'dragon'){
            result1 = 'Loss'
        }else{
            result1 = 'Draw'
        }
    }

    // Psychic
    if(userChoice === 'psychic'){
        if(computerChoice === 'fight' || computerChoice === 'fairy'){
            result1 = 'Win'
        }else if(computerChoice === 'steel' || computerChoice === 'psychic' || computerChoice === 'dark'){
            result1 = 'Loss'
        }else{
            result1 = 'Draw'
        }
    }

    // Ice
    if(userChoice === 'ice'){
        if(computerChoice === 'flying' || computerChoice === 'ground' || computerChoice === 'grass' || computerChoice === 'dragon'){
            result1 = 'Win'
        }else if(computerChoice === 'steel' || computerChoice === 'fire' ||computerChoice === 'water' || computerChoice === 'ice'){
            result1 = 'Loss'
        }else{
            result1 = 'Draw'
        }
    }

    // Dragon

    if(userChoice === 'dragon'){
        if(computerChoice === 'steel' || computerChoice === 'fairy' ){
            result1 = 'Loss'
        }else{
            result1 = 'Draw'
        }
    }

    // Dark
    if(userChoice === 'dark'){
        if(computerChoice === 'ghost' || computerChoice === 'psychic'){
            result1 = 'Win'
        }else if(computerChoice === 'fighter' || computerChoice === 'dark'|| computerChoice === 'fairy'){
            result1 = 'Loss'
        }else{
            result1 = 'Draw'
        }
    }

    // Fairy
    if(userChoice === 'fairy'){
        if(computerChoice === 'fighter'|| computerChoice === 'dragon'|| computerChoice === 'dark'){
            result1 = 'Win'
        }else if(computerChoice === 'poison' || computerChoice === 'steel'|| computerChoice === 'fire'){
            result1 = 'Loss'
        }else{
            result1 = 'Draw'
        }
    }
    console.log(result1)
    if(result1 === 'Win'){
        resultSpan1.style.backgroundImage = "url(imgs/masterball-win.jpg)";
        resultSpan1.style.backgroundSize = 'cover'
        userWins++
    }else if(result1 === 'Loss'){
        resultSpan1.style.backgroundImage = "url(imgs/pokeball-loss.webp)";
        resultSpan1.style.backgroundSize = 'cover'
        computerWins++
    }else{
        resultSpan1.style.backgroundImage = "url(imgs/ultraball-draw.webp)";
        resultSpan1.style.backgroundSize = 'cover'
        draws++
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

        // Normal Type
        if(userChoice2 === 'normal'){
            if(computerChoice2 === 'rock' || computerChoice2 === 'steel'){
                result2 = 'Loss'
            }else{
                result2 = 'Draw'
            }
        }

        // Fight Type
        if(userChoice2 === 'fighter'){
            if(computerChoice2 === 'normal' || computerChoice2 === 'rock' || computerChoice2 === 'steel' || computerChoice2 === 'ice' || computerChoice2 === 'dark'){
                result2 = 'Win'
            }else if(computerChoice2 === 'flying' || computerChoice2 === 'poison' || computerChoice2 === 'bug' || computerChoice2 === 'psychic' || computerChoice2 === 'fairy'){
                result2 = 'Loss'
            }else{
                result2 = 'Draw'
            }
        }
    
        // Flying type
        if(userChoice2 === 'flying'){
            if(computerChoice2 === 'fighter' || computerChoice2 === 'bug' || computerChoice2 === 'grass'){
                result2 = 'Win'
            }else if(computerChoice2 === 'rock' || computerChoice2 === 'steel' || computerChoice2 === 'electric'){
                result2 = 'Loss'
            }else{
                result2 = 'Draw'
            }
        }
    
        // Poison type
        if(userChoice2 === 'poison'){
            if(computerChoice2 === 'grass' || computerChoice2 === 'fairy'){
                result2 = 'Win'
            }else if(computerChoice2 === 'poison' || computerChoice2 === 'ground' || computerChoice2 === 'rock' || computerChoice2 === 'ghost' || computerChoice2 === 'steel'){
                result2 = 'Loss'
            }else{
                result2 = 'Draw'
            }
        }
    
        // Ground type
        if(userChoice2 === 'ground'){
            if(computerChoice2 === 'flying' || computerChoice2 === 'bug' || computerChoice2 === 'grass'){
                result2 = 'Loss'
            }else if(computerChoice2 === 'poison' || computerChoice2 === 'rock' || computerChoice2 === 'steel' || computerChoice2 === 'fire' || computerChoice2 === 'electric'){
                result2 = 'Win'
            }else{
                result2 = 'Draw'
            }
        }
        
        // Rock
        if(userChoice2 === 'rock'){
            if(computerChoice2 === 'flying' || computerChoice2 === 'bug' || computerChoice2 === 'fire' || computerChoice2 === 'ice'){
                result2 = 'Win'
            }else if(computerChoice2 === 'fighter' || computerChoice2 === 'ground' || computerChoice2 === 'steel'){
                result2 = 'Loss'
            }else{
                result2 = 'Draw'
            }
        }
    
        // Bug
        if(userChoice2 === 'bug'){
            if(computerChoice2 === 'grass' || computerChoice2 === 'psychic' || computerChoice2 === 'dark'){
                result2 = 'Win'
            }else if(computerChoice2 === 'fighter' || computerChoice2 === 'flying' || computerChoice2 === 'poison' || computerChoice2 === 'ghost' || computerChoice2 === 'steel' || computerChoice2 === 'fire' || computerChoice2 === 'fairy'){
                result2 = 'Loss'
            }else{
                result2 = 'Draw'
            }
        }
    
        // Ghost
        if(userChoice2 === 'ghost'){
            if(computerChoice2 === 'psychic'){
                result2 = 'Win'
            }else if(computerChoice2 === 'dark'){
                result2 = 'Loss'
            }else{
                result2 = 'Draw'
            }
        }
    
        // Steel
        if(userChoice2 === 'steel'){
            if(computerChoice2 === 'rock' || computerChoice2 === 'ice' || computerChoice2 === 'fairy'){
                result2 = 'Win'
            }else if(computerChoice2 === 'steel' || computerChoice2 === 'fire' || computerChoice2 === 'water' || computerChoice2 === 'electric'){
                result2 = 'Loss'
            }else{
                result2 = 'Draw'
            }
        } 
    
        // Fire
        if(userChoice2 === 'fire'){
            if(computerChoice2 === 'bug' || computerChoice2 === 'steel' || computerChoice2 === 'grass' || computerChoice2 === 'ice'){
                result2 = 'Win'
            }else if(computerChoice2 === 'rock' || computerChoice2 === 'fire' || computerChoice2 === 'water' || computerChoice2 === 'dragon'){
                result2 = 'Loss'
            }else{
                result2 = 'Draw'
            }
        }
    
        // Water
        if(userChoice2 === 'water'){
            if(computerChoice2 === 'ground' || computerChoice2 === 'rock' || computerChoice2 === 'fire'){
                result2 = 'Win'
            }else if(computerChoice2 === 'dragon' || computerChoice2 === 'water' || computerChoice2 === 'grass'){
                result2 = 'Loss'
            }else{
                result2 = 'Draw'
            }
        }
    
        // Grass
        if(userChoice2 === 'grass'){
            if(computerChoice2 === 'ground' || computerChoice2 === 'rock' || computerChoice2 === 'water'){
                result2 = 'Win'
            }else if(computerChoice2 === 'poison' || computerChoice2 === 'flying' || computerChoice2 === 'bug' || computerChoice2 === 'steel' || computerChoice2 === 'fire' || computerChoice2 === 'dragon' || computerChoice2 === 'grass'){
                result2 = 'Loss'
            }else{
                result2 = 'Draw'
            }
        }
    
        // Electric
        if(userChoice2 === 'electric'){
            if(computerChoice2 === 'flying' || computerChoice2 === 'water'){
                result2 = 'Win'
            }else if(computerChoice2 === 'ground' || computerChoice2 === 'grass' || computerChoice2 === 'electric' || computerChoice2 === 'dragon'){
                result2 = 'Loss'
            }else{
                result2 = 'Draw'
            }
        }
    
        // Psychic
        if(userChoice2 === 'psychic'){
            if(computerChoice2 === 'fight' || computerChoice2 === 'fairy'){
                result2 = 'Win'
            }else if(computerChoice2 === 'steel' || computerChoice2 === 'psychic' || computerChoice2 === 'dark'){
                result2 = 'Loss'
            }else{
                result2 = 'Draw'
            }
        }
    
        // Ice
        if(userChoice2 === 'ice'){
            if(computerChoice2 === 'flying' || computerChoice2 === 'ground' || computerChoice2 === 'grass' || computerChoice2 === 'dragon'){
                result2 = 'Win'
            }else if(computerChoice2 === 'steel' || computerChoice2 === 'fire' ||computerChoice2 === 'water' || computerChoice2 === 'ice'){
                result2 = 'Loss'
            }else{
                result2 = 'Draw'
            }
        }
    
        // Dragon
    
        if(userChoice2 === 'dragon'){
            if(computerChoice2 === 'steel' || computerChoice2 === 'fairy' ){
                result2 = 'Loss'
            }else{
                result2 = 'Draw'
            }
        }
    
        // Dark
        if(userChoice2 === 'dark'){
            if(computerChoice2 === 'ghost' || computerChoice2 === 'psychic'){
                result2 = 'Win'
            }else if(computerChoice2 === 'fighter' || computerChoice2 === 'dark'|| computerChoice2 === 'fairy'){
                result2 = 'Loss'
            }else{
                result2 = 'Draw'
            }
        }
    
        // Fairy
        if(userChoice2 === 'fairy'){
            if(computerChoice2 === 'fighter'|| computerChoice2 === 'dragon'|| computerChoice2 === 'dark'){
                result2 = 'Win'
            }else if(computerChoice2 === 'poison' || computerChoice2 === 'steel'|| computerChoice2 === 'fire'){
                result2 = 'Loss'
            }else{
                result2 = 'Draw'
            }
        }
        if(result2 === 'Win'){
            resultSpan2.style.backgroundImage = "url(imgs/masterball-win.jpg)";
            resultSpan2.style.backgroundSize = 'cover'
            userWins++
        }else if(result2 === 'Loss'){
            resultSpan2.style.backgroundImage = "url(imgs/pokeball-loss.webp)";
            resultSpan2.style.backgroundSize = 'cover'
            computerWins++
        }else{
            resultSpan2.style.backgroundImage = "url(imgs/ultraball-draw.webp)";
            resultSpan2.style.backgroundSize = 'cover'
            draws++
        }
        console.log(result2)
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
        case 2: 
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

        // Normal Type
        if(userChoice3 === 'normal'){
            if(computerChoice3 === 'rock' || computerChoice3 === 'steel'){
                result3 = 'Loss'
            }else{
                result3 = 'Draw'
            }
        }
    
    
        // Fight Type
        if(userChoice3 === 'fighter'){
            if(computerChoice3 === 'normal' || computerChoice3 === 'rock' || computerChoice3 === 'steel' || computerChoice3 === 'ice' || computerChoice3 === 'dark'){
                result3 = 'Win'
            }else if(computerChoice3 === 'flying' || computerChoice3 === 'poison' || computerChoice3 === 'bug' || computerChoice3 === 'psychic' || computerChoice3 === 'fairy'){
                result3 = 'Loss'
            }else{
                result3 = 'Draw'
            }
        }
    
        // Flying type
        if(userChoice3 === 'flying'){
            if(computerChoice3 === 'fighter' || computerChoice3 === 'bug' || computerChoice3 === 'grass'){
                result3 = 'Win'
            }else if(computerChoice3 === 'rock' || computerChoice3 === 'steel' || computerChoice3 === 'electric'){
                result3 = 'Loss'
            }else{
                result3 = 'Draw'
            }
        }
    
        // Poison type
        if(userChoice3 === 'poison'){
            if(computerChoice3 === 'grass' || computerChoice3 === 'fairy'){
                result3 = 'Win'
            }else if(computerChoice3 === 'poison' || computerChoice3 === 'ground' || computerChoice3 === 'rock' || computerChoice3 === 'ghost' || computerChoice3 === 'steel'){
                result3 = 'Loss'
            }else{
                result3 = 'Draw'
            }
        }
    
        // Ground type
        if(userChoice3 === 'ground'){
            if(computerChoice3 === 'flying' || computerChoice3 === 'bug' || computerChoice3 === 'grass'){
                result3 = 'Loss'
            }else if(computerChoice3 === 'poison' || computerChoice3 === 'rock' || computerChoice3 === 'steel' || computerChoice3 === 'fire' || computerChoice3 === 'electric'){
                result3 = 'Win'
            }else{
                result3 = 'Draw'
            }
        }
        
        // Rock
        if(userChoice3 === 'rock'){
            if(computerChoice3 === 'flying' || computerChoice3 === 'bug' || computerChoice3 === 'fire' || computerChoice3 === 'ice'){
                result3 = 'Win'
            }else if(computerChoice3 === 'fighter' || computerChoice3 === 'ground' || computerChoice3 === 'steel'){
                result3 = 'Loss'
            }else{
                result3 = 'Draw'
            }
        }
    
        // Bug
        if(userChoice3 === 'bug'){
            if(computerChoice3 === 'grass' || computerChoice3 === 'psychic' || computerChoice3 === 'dark'){
                result3 = 'Win'
            }else if(computerChoice3 === 'fighter' || computerChoice3 === 'flying' || computerChoice3 === 'poison' || computerChoice3 === 'ghost' || computerChoice3 === 'steel' || computerChoice3 === 'fire' || computerChoice3 === 'fairy'){
                result3 = 'Loss'
            }else{
                result3 = 'Draw'
            }
        }
    
        // Ghost
        if(userChoice3 === 'ghost'){
            if(computerChoice3 === 'psychic'){
                result3 = 'Win'
            }else if(computerChoice3 === 'dark'){
                result3 = 'Loss'
            }else{
                result3 = 'Draw'
            }
        }
    
        // Steel
        if(userChoice3 === 'steel'){
            if(computerChoice3 === 'rock' || computerChoice3 === 'ice' || computerChoice3 === 'fairy'){
                result3 = 'Win'
            }else if(computerChoice3 === 'steel' || computerChoice3 === 'fire' || computerChoice3 === 'water' || computerChoice3 === 'electric'){
                result3 = 'Loss'
            }else{
                result3 = 'Draw'
            }
        } 
    
        // Fire
        if(userChoice3 === 'fire'){
            if(computerChoice3 === 'bug' || computerChoice3 === 'steel' || computerChoice3 === 'grass' || computerChoice3 === 'ice'){
                result3 = 'Win'
            }else if(computerChoice3 === 'rock' || computerChoice3 === 'fire' || computerChoice3 === 'water' || computerChoice3 === 'dragon'){
                result3 = 'Loss'
            }else{
                result3 = 'Draw'
            }
        }
    
        // Water
        if(userChoice3 === 'water'){
            if(computerChoice3 === 'ground' || computerChoice3 === 'rock' || computerChoice3 === 'fire'){
                result3 = 'Win'
            }else if(computerChoice3 === 'dragon' || computerChoice3 === 'water' || computerChoice3 === 'grass'){
                result3 = 'Loss'
            }else{
                result3 = 'Draw'
            }
        }
    
        // Grass
        if(userChoice3 === 'grass'){
            if(computerChoice3 === 'ground' || computerChoice3 === 'rock' || computerChoice3 === 'water'){
                result3 = 'Win'
            }else if(computerChoice3 === 'poison' || computerChoice3 === 'flying' || computerChoice3 === 'bug' || computerChoice3 === 'steel' || computerChoice3 === 'fire' || computerChoice3 === 'dragon' || computerChoice3 === 'grass'){
                result3 = 'Loss'
            }else{
                result3 = 'Draw'
            }
        }
    
        // Electric
        if(userChoice3 === 'electric'){
            if(computerChoice3 === 'flying' || computerChoice3 === 'water'){
                result3 = 'Win'
            }else if(computerChoice3 === 'ground' || computerChoice3 === 'grass' || computerChoice3 === 'electric' || computerChoice3 === 'dragon'){
                result3 = 'Loss'
            }else{
                result3 = 'Draw'
            }
        }
    
        // Psychic
        if(userChoice3 === 'psychic'){
            if(computerChoice3 === 'fight' || computerChoice3 === 'fairy'){
                result3 = 'Win'
            }else if(computerChoice3 === 'steel' || computerChoice3 === 'psychic' || computerChoice3 === 'dark'){
                result3 = 'Loss'
            }else{
                result3 = 'Draw'
            }
        }
    
        // Ice
        if(userChoice3 === 'ice'){
            if(computerChoice3 === 'flying' || computerChoice3 === 'ground' || computerChoice3 === 'grass' || computerChoice3 === 'dragon'){
                result3 = 'Win'
            }else if(computerChoice3 === 'steel' || computerChoice3 === 'fire' ||computerChoice3 === 'water' || computerChoice3 === 'ice'){
                result3 = 'Loss'
            }else{
                result3 = 'Draw'
            }
        }
    
        // Dragon
    
        if(userChoice3 === 'dragon'){
            if(computerChoice3 === 'steel' || computerChoice3 === 'fairy' ){
                result3 = 'Loss'
            }else{
                result3 = 'Draw'
            }
        }
    
        // Dark
        if(userChoice3 === 'dark'){
            if(computerChoice3 === 'ghost' || computerChoice3 === 'psychic'){
                result3 = 'Win'
            }else if(computerChoice3 === 'fighter' || computerChoice3 === 'dark'|| computerChoice3 === 'fairy'){
                result3 = 'Loss'
            }else{
                result3 = 'Draw'
            }
        }
    
        // Fairy
        if(userChoice3 === 'fairy'){
            if(computerChoice3 === 'fighter'|| computerChoice3 === 'dragon'|| computerChoice3 === 'dark'){
                result3 = 'Win'
            }else if(computerChoice3 === 'poison' || computerChoice3 === 'steel'|| computerChoice3 === 'fire'){
                result3 = 'Loss'
            }else{
                result3 = 'Draw'
            }
        }    
        if(result3 === 'Win'){
            resultSpan3.style.backgroundImage = "url(imgs/masterball-win.jpg)";
            resultSpan3.style.backgroundSize = 'cover'
            userWins++
        }else if(result3 === 'Loss'){
            resultSpan3.style.backgroundImage = "url(imgs/pokeball-loss.webp)";
            resultSpan3.style.backgroundSize = 'cover'
            computerWins++
        }else{
            resultSpan3.style.backgroundImage = "url(imgs/ultraball-draw.webp)";
            resultSpan3.style.backgroundSize = 'cover'
            draws++
        }
        console.log(result3)
    round++
}

function finalResult(){
    if(userWins > computerWins){
        finalResultValue = 'You won'
    }else if(userWins < computerWins){
        finalResultValue = 'You lost'
    }else{
        finalResultValue = "It's a draw"
    }
    finalResultSpan.innerHTML = finalResultValue 
}