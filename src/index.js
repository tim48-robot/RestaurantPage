import home from "./page1.js";
import menu from "./menu.js";
import contact from "./contact.js";
import about from "./aboutus.js";
document.addEventListener("DOMContentLoaded", home);

(function listenHome(){
    const homeBtn = document.querySelector("#home");
    homeBtn.addEventListener("click", () => {
        home();
    })
})();

(function listenMenu(){
    const menuBtn = document.querySelector("#menu");
    menuBtn.addEventListener("click", () => {
        menu();
    })
}());

(function listenContact(){
    const contactBtn = document.querySelector("#contact");
    contactBtn.addEventListener("click", () => {
        contact()
    })
}());

(function listenAbout(){
    const aboutBtn = document.querySelector("#about");
    aboutBtn.addEventListener("click", () => {
        about()
    })
}());