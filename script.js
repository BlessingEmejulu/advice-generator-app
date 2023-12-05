// ----- YOU GIVE LIFE TO MY CODE -----
let advice_id = document.getElementById("advice-id");
let advice_quote = document.getElementById("advice-quote");
let button = document.getElementById("get-quote");

let adviceNum = "";
let fetchedAdvice = "";

// ------ EVENTS -------
button.addEventListener("click", getAdvice);

// ----- GETTING ADVICE QUOTE FROM THE API
function getAdvice() {
    fetch("https://api.adviceslip.com/advice")
        .then(resp => resp.json())
        .then(data => {
            // --- ASSIGN QUOTE NUMBER ---
            adviceNum = data.slip.id;
            // --- ASSIGN ADVICE QUOTE ---
            fetchedAdvice = data.slip.advice;
            // --- UPDATE ADVICE TEXT ON SCREEN ---
            advice_id.textContent = `#${adviceNum}`;
            advice_quote.textContent = `"${fetchedAdvice}"`;
            // FADEIN QUOTE AND # ---
            advice_id.style.setProperty("opacity", 1);
            advice_quote.style.setProperty("opacity", 1);
        });
} // --- END OF getAdvice FUNCTION ---

// ----- FETCH A QUOTE IMMEDIATELY ON PAGELOAD -----
getAdvice();