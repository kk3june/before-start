const arrowUp = document.querySelector(".arrowUp");
const backToTop = document.getElementById("greeting");
document.addEventListener("scroll", () => {
    const currentHeight = window.scrollY
    console.log(currentHeight);

    if (currentHeight < 450 ){
        arrowUp.classList.add("visible");
        arrowUp.style.pointerEvents = "none";
    } else {
        arrowUp.classList.remove("visible");
        arrowUp.style.pointerEvents = "auto";
    }
});

arrowUp.addEventListener('click', () => {
    backToTop.scrollIntoView();
});