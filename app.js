let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".reset-btn");
let newbtn = document.querySelector(".new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;                        

const winPatterns = [                    
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const resetGame = () => {                     
    turnO = true;
    enableboxes();
    msgContainer.classList.add("hide");
};

boxes.forEach((box) => {                      
    box.addEventListener("click", () => {
        if(turnO) {
            box.innerText = "O";
            box.style.color = "#2B83E2";
            turnO = false;
        } else {
            box.innerText = "X";
            box.style.color = "#E22B83";
            turnO = true;
        }
        box.disabled = true;

        checkwinner();
    });
});

const disableboxes = () => {                     
    for(let box of boxes) {
        box.disabled = true;
    }
};

const enableboxes = () => {                     
    for(let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};


const showWinner = (winner) => {                   
    msg.innerText = `Congratulations!! \n Winner is ' ${winner} '`;
    msgContainer.classList.remove("hide");
    disableboxes();
};

const checkwinner = () => {                         
    for(pattern of winPatterns) {

        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if(pos1val != "" && pos2val != "" && pos3val != "") {
            if(pos1val === pos2val && pos2val === pos3val) {
                showWinner(pos1val);
            }
        }
    }
};

newbtn.addEventListener("click", resetGame);              
resetbtn.addEventListener("click", resetGame);















