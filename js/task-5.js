// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }
// const body = document.querySelector("body")
// const span = document.querySelector(".color")
// const button = document.querySelector(".change-color")

// button.addEventListener("click", () => {
//   const color = getRandomHexColor()
//   body.style.backgroundColor = color
//   span.textContent = color
// })



// const students = document.querySelectorAll("#students .student")
// console.log("Number of students:", students.length)
// students.forEach((students) => {
// console.log("Student", students.querySelector("h2").textContent)
// console.log("Elements", students.querySelectorAll("li").length)
  
// });

// const gallery = document.querySelector(".gallery")

// const galleryItem = images.map((image) => {
// `<li> 
// <img src="${image.url}" alt"${image.alt}">
// </li>`
// }).join("")
// gallery.insertAdjacentHTML("beforeend", galleryItem)


// const input = document.querySelector("#user-input")
// const output = document.querySelector("user-output")
// input.addEventListener("input" (event) => {
//   if(event.target.value.trim() !== ""){
//     output.textContent = event.target.trim()
//   } else {
//     output.textContent = "Guest"
//   }
// })


// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, "0")}`;
// }

// const color = document.querySelector(".generate-color")
// const widghet = document.querySelector(".color-widghet")
// const value = document.querySelector(".color-value")
// color.addEventListener("click" (event) => {
//   const color = getRandomHexColor(color)
//   body.style.backgroundColor = color
//   value.textContent = color

// })

// const form = document.querySelector(.register-form)
//  form.addEventListener("submit", (event) => {
//   event.preventDefault()
//   if (email.value === "" || password.value === "") {
//    return alert("All fields are required")
//   } 

//   const formData = new FormData(event.currentTarget)
//   formData.forEach((value, name) => {
//     console.log(`${name} ${value.trim()}`)
//   })
//   event.currentTarget
//  })


// const form = document.querySelector(".login-form");

// form.addEventListener("submit", (event) => {
//   event.preventDefault();

//   const username = form.elements.email.value.trim();
//   const password = form.elements.password.value.trim();

//   if (username === "" || password === "") {
//     alert("All form fields must be filled in");
//     return;
//   }

//   const formData = {
//     email: username,
//     password: password,
//   };

//   console.log(formData);

//   form.reset();
// });

