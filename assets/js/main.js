const btnELRed = document.querySelector(".btn-danger");
console.log( btnELRed);
const boxEl = document.querySelector(".box");
console.log(boxEl);
const btnElDark = document.querySelector(".btn-dark");
console.log(btnElDark);
const containerEl = document.querySelector(".boxstyle");
console.log(containerEl);
const inputEl = document.querySelector(".input-search ");
console.log("inputEl");
const btnElGreen = document.querySelector(".btn-style");
console.log(btnElGreen);
const tableEl = document.querySelector(".searchtable");
console.log(tableEl);
const darkbtn = document.querySelector(".darkbtn");
btnELRed.addEventListener("click", () => {
    if(boxEl.style.display == "flex"){
        boxEl.style.display = "none";
    }
    else{
        boxEl.style.display = "flex"
    }
containerEl.classList.add("secondclass");

})
btnElDark.addEventListener("click", () => {
    if(boxEl.style.display == "flex"){
        boxEl.style.display = "none";
    }
    else{
        boxEl.style.display = "flex"
    }
    containerEl.classList.add("secondclass");
})
btnElGreen.addEventListener('click', () => {
    tableEl.classList.toggle("searchtablestyle");
    
})
darkbtn.addEventListener('click', () => {
    containerEl.classList.toggle("containerElemnt");
    boxEl.style.display = "flex"

})