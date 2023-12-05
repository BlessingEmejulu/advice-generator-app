// ----- YOU GIVE LIFE TO MY CODE -----
let advice_id = document.getElementById("advice-id");
let advice_quote = document.getElementById("advice-quote");
let button = document.getElementById("get-quote");

// FUNCTION TO UPDATE THE UI WITH ADVICE
function updateAdvice(data) {
    // --- Assign advice number---
    adviceNum = data.slip.id;
    // --- Assign advice quote ---
    fetchedAdvice = data.slip.advice;
    // --- Update text advice text on screen ---
    advice_id.textContent = `#${adviceNum}`;
    advice_quote.textContent = `"${fetchedAdvice}"`;
    // Fadein quote and number ---
    advice_id.style.setProperty("opacity", 1);
    advice_quote.style.setProperty("opacity", 1);
}

// FUNCTION TO HANDLE ERRORS
function handleErrors(error) {
    // Log the error to the console for debugging purposes
    console.error("Error fetching advice:", error);
    // Display a user-friendly message on the screen
    advice_id.textContent = "Error";
    advice_quote.textContent = "Failed to fetch advice. Please try again later.";
}

// ------ EVENTS -------
button.addEventListener("click", getAdvice);

// ----- GETTING ADVICE QUOTE FROM THE API
function getAdvice() {
    fetch("https://api.adviceslip.com/advice")
        .then(resp => {
            if (!resp.ok) {
                // Handle specific HTTP status codes
                if (resp.status === 404) {
                    throw new Error("Advice not found");
                } else if (resp.status === 500) {
                    throw new Error("Server error");
                } else {
                    throw new Error("Network response was not ok");
                }
            }
            return resp.json();
        })
        .then(data => {
            // Call the function to update the UI with advice
            updateAdvice(data);
        })
        .catch(handleErrors);
}

// ----- FETCH A QUOTE IMMEDIATELY ON PAGELOAD -----
getAdvice();
