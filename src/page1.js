import imagepng from "./image.png";
import "./styles.css";

export default function home(){
    const content = document.querySelector("#content");
    content.replaceChildren();

    const image = document.createElement("img");
    image.src = imagepng

    const title = document.createElement("h1");
    title.textContent = "LETS EAT IN MY RESTAURANT FROM TEGAL VERy SPECIAL VERY DELICISIO";
    const text = document.createElement("span");
    text.textContent = "This is jut an example for my coding very coding liciosos"

    content.appendChild(title);
    content.appendChild(image);
    content.appendChild(text);
    console.log('Saya kan orang dua ');
}