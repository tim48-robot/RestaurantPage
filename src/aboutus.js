export default function about(){
    const content = document.querySelector("#content");
    content.replaceChildren();

    const text = document.createElement("p");
    const text2 = document.createElement("p");
    const text3 = document.createElement("p");
    const text4 = document.createElement("p");
    
    text.textContent = `This is a restaurant that is made since 1997.`

    text2.textContent = `This restaurant is very authentic since it delivers food from all over the country.`
    text3.textContent = `Favorite Menu here includes potato with chicken liver and green mussels which is my personal favorite.`
    text4.textContent = `You can also go for sunny side up which is never wrong on any occasion!`

    const lineBreak = document.createElement("br");
    const lineBreak2 = document.createElement("br");
    const lineBreak3 = document.createElement("br");
    // could use inner html as well? maybe with the paragraph having br? 
    // better option would be for a loop but imma do the refactor later
    content.appendChild(text);
    content.appendChild(lineBreak);
    content.appendChild(text2);
    content.appendChild(lineBreak2);
    content.appendChild(text3);
    content.appendChild(lineBreak3);
    content.appendChild(text4);
}