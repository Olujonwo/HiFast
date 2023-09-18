// let answers = document.querySelectorAll(".accordion");
// answers.forEach((event) => {
//    event.addEventListener('click', () => {
//       if (event.classList.contains("active")) {
//          event.classList.remove("active");
//       } else {
//          event.classList.add("active");
//       }
//    })
// })
let answers = document.querySelectorAll(".accordion div");
answers.forEach((item) => {
    item.addEventListener('click', () => {
        const accordy = item.parentNode.parentNode.parentNode
        accordy.classList.toggle('active');
   })
})