import "./style.css";
import Game from "./images/15Game.png";
import Maze from "./images/Maze.png";
import Solitaire from "./images/Solitaire.png";


const slidesNode = document.querySelectorAll(".wrapper")[0].children;
const $slidePlace = document.querySelector(".frames");
console.log(slidesNode);

for (let i = 0; i < slidesNode.length; i ++){
    slidesNode[i].addEventListener("click", handleClick)
}

function handleClick(evt) {
    evt.stopPropagation();
    const target = evt.target;
    // <iframe src="frames/15Game/index.html" width="100%"  height="800" id="15Game"></iframe>
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