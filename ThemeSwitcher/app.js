const darkButton = document.getElementById("dark");
const lightButton = document.getElementById("light");
const solarButton = document.getElementById("solar");
const body = document.body;

// use local storage to store the themes

const theme = localStorage.getItem("theme");
const isSolar = localStorage.getItem("isSolar");

if(theme) {
    body.classList.add(theme);
    isSolar && body.classList.add("solar");
}

// button event handlers

darkButton.onclick = () => {
    // body.classList.remove("light");
    // body.classList.add("dark");

    body.classList.replace("light", "dark");

    localStorage.setItem("theme", "dark");
};

lightButton.onclick = () => {
    body.classList.replace("dark", "light");

    localStorage.setItem("theme", "light");
};

solarButton.onclick = () => {
    if(body.classList.contains("solar")) {
        body.classList.remove("solar");
        solarButton.innerText = "solarize";

        localStorage.setItem("isSolar", false);
        // Not needed right now, but we can change the variables directly by modify css text
        // solarButton.style.cssText = ` --bg-solar: var(--yellow); `
    } else {
        solarButton.style.cssText = ` --bg-solar: white;`;
        body.classList.add("solar");

        localStorage.setItem("isSolar", true);
    }
};