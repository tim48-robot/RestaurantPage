export default function contact(){
    const content = document.querySelector("#content");
    content.replaceChildren();

    const text = document.createElement("p");
    const lineBreak = document.createElement("br");
    const text2 = document.createElement("p");
    text.textContent = "For Orders and More Information about my Restaurant"
    text2.textContent = "Contact me at @tim48-robot on github"

    content.appendChild(text);
    content.appendChild(lineBreak);
    content.appendChild(text2);
}