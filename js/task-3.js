const inputName = document.querySelector("#name-input")
const outputName = document.querySelector("#name-output")
inputName.addEventListener("input", (event) => {
    if (event.target.value.trim() !== "") {
        outputName.textContent = event.target.trim()
    } else {
        outputName.textContent = "Anonymus"
    }

})