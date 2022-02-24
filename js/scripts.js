const container = document.querySelector(".slider_valentine")
document.querySelector(".arrow_left").addEventListener("click", (e) => {
    e.preventDefault()
    container.scrollTo({
        top: 0,
        left: container.scrollLeft - 450,
        behavior: "smooth"
    })
})
document.querySelector(".arrow_right").addEventListener("click", (e) => {
    e.preventDefault()
    container.scrollTo({
        top: 0,
        left: container.scrollLeft + 450,
        behavior: "smooth"
    })
})