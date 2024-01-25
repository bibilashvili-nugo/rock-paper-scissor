const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissor = document.querySelector(".scissor");
const human = document.querySelector(".human");
const robot = document.querySelector(".robot");
const result = document.querySelector(".result");
const playAgain = document.querySelector(".btnAgain");

let arr = []

function init(){
    playAgain.addEventListener("click", function(){
        arr = []
        human.src = `human.png`
        robot.src = `robot.png`
        document.querySelector(".result").textContent = "Let's Play!!"
        robot.classList.remove("rotate")
        human.classList.remove("rotateHuman")
    })
}

init()

function userChoose(){
    rock.addEventListener("click", function(){
        if(arr.length === 0){
            arr.push(0)
            human.src = `rock.png`
            human.classList.add("rotateHuman");
            if(arr.length === 1){
                arr.push(Math.trunc(Math.random()*3))
            }
            whichOne()
        }
        winner()
    })
    
    paper.addEventListener("click", function(){
        if(arr.length === 0){
            arr.push(1)
            human.src = `paper.png`
            human.classList.add("rotateHuman");
            if(arr.length === 1){
                arr.push(Math.trunc(Math.random()*3))
            }
            whichOne()
        }
        winner()
    })
    
    scissor.addEventListener("click", function(){
        if(arr.length === 0){
            arr.push(2)
            human.src = `scissor.png`
            human.classList.add("rotateHuman");
            if(arr.length === 1){
                arr.push(Math.trunc(Math.random()*3))
            }
            whichOne()
        }
        winner()
    })
}

userChoose()

function whichOne(){
    if(arr[1] === 0) robot.src = `rock.png`;
    if(arr[1] === 1) robot.src = `paper.png`;
    if(arr[1] === 2) robot.src = `scissor.png`;

    robot.classList.add("rotate")
}

function winner(){
    if(arr[0] === arr[1]){
        document.querySelector(".result").textContent = "Draw!!"
    } else if(arr[0] === 0 && arr[1] === 2) {
        document.querySelector(".result").textContent = "Player win"
    } else if(arr[0] === 2 && arr[1] === 0) {
        document.querySelector(".result").textContent = "Robot win"
    } else if(arr[0] === 1 && arr[1] === 0) {
        document.querySelector(".result").textContent = "Player win"
    } else if(arr[0] === 0 && arr[1] === 1){
        document.querySelector(".result").textContent = "Robot win"
    } else if(arr[0] === 1 && arr[1] === 2){
        document.querySelector(".result").textContent = "Robot win"
    } else if(arr[0] === 2 && arr[1] === 1){
        document.querySelector(".result").textContent = "Player win"
    }
}