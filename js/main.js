const aboutMe = document.getElementById("about-me");
const linkedIn = document.getElementById("linked-in");
const option = document.getElementById("option");
const optionsList = document.getElementById("options-list");

aboutMe.addEventListener("click", () => {
  new WinBox("/about-me", {
    x: "center",
    y: "center",
    border: "1em",
    html: "<h1>Apaixonado por Node.js</h1>",
  });
});

optionsList.addEventListener("mouseover", (event) => {
  renderOption(event.target.innerText);
});

optionsList.addEventListener("mouseout", (event) => {
  option.textContent = "";
});

function renderOption(text) {
  option.textContent = " cd " + text;
}
