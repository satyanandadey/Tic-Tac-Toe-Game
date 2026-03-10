let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let newgame = document.querySelector("#newgame");

let turnO=true;//playerX , playerO

const WinPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetGame=()=>{
    turnO=true;
    enabled_box();
    msgContainer.classList.add("hide");
}; 

 boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){ // playerO
            box.innerText="O";
            turnO=false;
        }
        else{ // playerX
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;

        check_Winner();
    })
 })



const disabled_box=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};

const enabled_box=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};

const showWinner=(winner)=>{
    msg.innerText=`Congradulations , Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disabled_box();
};

const check_Winner=()=>{
    for(let pattern of WinPatterns){
        let pos1Value=boxes[pattern[0]].innerText;
        let pos2Value=boxes[pattern[1]].innerText;
        let pos3Value=boxes[pattern[2]].innerText;
        if(pos1Value!="" && pos2Value!="" && pos3Value!=""){
            if(pos1Value===pos2Value && pos2Value===pos3Value){
                console.log("Winner",pos1Value);
                showWinner(pos1Value);
            }
        }        
    }
};

newgame.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);