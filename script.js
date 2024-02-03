const rattingNumber = document.querySelectorAll(".rating span")
let selectedNumber = document.getElementById("selected")
const button = document.querySelector(".submit-button")
const rating = document.querySelector(".rating-section")
const thanks = document.querySelector(".thanks-section")

let rate = null;

rattingNumber.forEach((number)=>{
    number.addEventListener("click",()=>{
        rattingNumber.forEach((num)=>{
            // remove "clicked" for all the number
            num.classList.remove("clicked")
        })
        number.classList.add("clicked");
        rate=number.innerText;
        // console.log(rate)
        // console.log(number.innerText)
        selectedNumber.textContent = rate;

    })
})
// console.log(rate)

button.addEventListener("click", ()=>{
    if (rate){
        rating.classList.add("hidden");
        thanks.classList.remove("hidden");
    }
})