const form = document.querySelector(".login-form")
form.addEventListener("submit", handlerSubmit)
function handlerSubmit(event) {
    event.preventDefault();
    const { element: { email, password } } = event.currentTarget

    if (email.value === "" || password.value === "") {
        return alert('All form fields must be filled in')
    }

    const formData = new FormData(event.currentTarget)
    formData.forEach((value, name) => {
        console.log(`${name}, ${value.trim()}`)
    })
    event.currentTarget.reset()
}


