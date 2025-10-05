import menupng from "./img/menu.png";
export default function menu(){
    const content = document.querySelector("#content");
    content.replaceChildren();

    const image = document.createElement("img");
    image.src = menupng

    content.appendChild(image);
}