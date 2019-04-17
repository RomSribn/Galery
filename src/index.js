import "./style.css";
import Game from "./images/15Game.png";
import Maze from "./images/Maze.png";
import Solitaire from "./images/Solitaire.png";
import Empty from "./images/empty.png"


const slidesNode = document.querySelectorAll(".wrapper")[0].children;
const slidesArray = [];
const $slidePlace = document.querySelector(".frames");
const controls = {
    left: document.querySelector(".control.left"),
    right: document.querySelector(".control.right")
};

for (let i = 2; i < slidesNode.length; i ++){
    slidesNode[i].addEventListener("click", handleOnSlideClick);
    slidesArray.push(slidesNode[i]);
}
const slidesDisplayPosition = {
    start: 0,
    end:slidesArray.length-1
};

console.log(slidesDisplayPosition.end);
controls.left.addEventListener("click", handleSlideLeft);
controls.right.addEventListener("click", handleSlideRight);
// console.log(slidesNode[2].remove());

function handleSlideLeft(evt) {
    console.log(this.dataset.control === "left");
    if(this.dataset.control === "left"){
        let removedNode = slidesArray[slidesDisplayPosition.start];
        slidesArray[slidesDisplayPosition.start].hidden = true;
        slidesArray[slidesDisplayPosition.end].hidden = false;
        // slidesDisplayPosition.start = slidesDisplayPosition.start + 1;
    }
}


function handleSlideRight(evt) {
    if(this.dataset.control === "right"){
        let removedNode = slidesArray[slidesDisplayPosition.end];
        slidesArray[slidesDisplayPosition.end].hidden = true;
        slidesArray[slidesDisplayPosition.start].hidden = false;
        // slidesDisplayPosition.end = slidesDisplayPosition.end - 1;
    }
}

function handleOnSlideClick(evt) {
    evt.stopPropagation();
    const target = evt.target;
    if(this.dataset.type === "slide"){
            $slidePlace.replaceChild(createFrame(this.dataset.slide), $slidePlace.firstChild)
    }
}

function createFrame(src) {
    const frame = document.createElement("iframe");
    frame.setAttribute("width", "100%");
    frame.setAttribute("height", 800);
    frame.setAttribute("src", `frames/${src}/index.html`);
    frame.setAttribute("id", src);
    return frame;
}