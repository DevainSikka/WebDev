/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

const rateFull = 35; 
const rateHalf = 20; 
let rate = rateFull;
let days = []
let count = 0
const dayBtns = document.querySelectorAll(".day-selector li");
const costDisplay = document.getElementById("calculated-cost");
const btnFull = document.getElementById("full");
const btnHalf = document.getElementById("half");
const btnClear = document.getElementById("clear-button");



/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

dayBtns.forEach(btn => {
    days.push(btn)
    btn.addEventListener("click", function () {
        if (this.classList.contains("clicked")) {
            this.classList.remove("clicked");
            count--
        } else {
            this.classList.add("clicked");
            count++
        }
        calcCost();
    });
});




/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

btnClear.addEventListener("click", function () {
    days.forEach(btn => btn.classList.remove("clicked"));
    count= 0
    costDisplay.innerHTML = "0";
});





/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

btnHalf.addEventListener("click", function () {
    rate = rateHalf;
    btnHalf.classList.add("clicked");
    btnFull.classList.remove("clicked");
    calcCost();
});

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

btnFull.addEventListener("click", function () {
    rate = rateFull;
    btnFull.classList.add("clicked");
    btnHalf.classList.remove("clicked");
    calcCost();
});



/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value
function calcCost() {
    const total = count * rate;
    costDisplay.innerHTML = total.toString();
}

