const wordEl = document.querySelector(".word");
const oldWordsEl = document.querySelector(".old-words");

// Wortliste
let words = [];
let currentWord = "";
let previousWord = [];

fetch("words.txt").then(function(response) {
    return response.text()
}).then(function(text) {
    words = text.split(",");
    console.log(words);
});


function ButtonClick(){
    currentWord = getRandomWord(); // neues Word generieren und als aktuelles Word speichern
    if(!previousWord.includes(currentWord)){
        previousWord.push(currentWord);
        wordEl.innerHTML = currentWord; // aktuelles Word in HTML einfügen
        oldWordsEl.innerHTML = previousWord.join(", "); // alte Wörter in HTML einfügen
    }else{
        ButtonClick();
    }
    
}

function getRandomWord(){
    let randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];

}