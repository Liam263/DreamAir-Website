const main = document.querySelector('#main');

//   SHow flights
const buyBtns = document.querySelectorAll('.search-flight-btns')
const searchBtn = document.querySelectorAll('.search-btn')
const flightmodal = document.querySelector('.flight-modal')
const selectFlight = document.querySelector('.js-select-flight')
var departInput = document.getElementById('from') 
var destInput = document.getElementById('to') 
var departValue = document.querySelectorAll('.depart')
var destValue = document.querySelectorAll('.dest')

//open Select Flights window
function showFlights(){
    flightmodal.classList.add('flight-open')
    // main.classList.add('main-remove')
}

//Close Buy ticket window
function hideSelectFlight(){
    flightmodal.classList.remove('flight-open')
}
//get and displat inpute
function showInput(){
    for( var depart of departValue){
        depart.textContent = departInput.value
    }
    for( var dest of destValue){
        dest.textContent = destInput.value
    }
}
// Search Button 
for(const i of searchBtn){
    i.addEventListener('click',showFlights);
    i.addEventListener('click',showInput);

}
for(const btn of buyBtns){
    btn.addEventListener('click', showFlights )
}

//  ENd show flights

 //SHOW INFO
const infoModal = document.querySelector('.info-modal')
const purchaseBtns = document.querySelectorAll('.purchase-btn')

function showInfoWindow(){
    infoModal.classList.add('info-open')
    flightmodal.classList.remove('flight-open')

}
for (const purchase of purchaseBtns){
    purchase.addEventListener('click', showInfoWindow)
}
//  End show info window

// SHOW Seats 
const seatsModal = document.querySelector('.seats-modal')
const infoNextBtn = document.querySelector('.info-next-step')

function showSeats(){
    seatsModal.classList.add('seats-open')
    infoModal.classList.remove('info-open')
}

infoNextBtn.addEventListener('click', showSeats)
//End show SEATS 

// SHOW F&D
const menuModal = document.querySelector('.menu-modal')
const seatsNextBtn = document.querySelector('.seats-next-step')

function showMenu(){
    menuModal.classList.add('menu-open')
    seatsModal.classList.remove('seats-open')
}

seatsNextBtn.addEventListener('click', showMenu)
// END SHOW F&D

// SHow payment 
import { cart } from './F&D/F&D.js';
import { seatSelected, total } from './seats/seats.js';
const paymentbtns = document.querySelectorAll('.paymentBtn')
const paymentModal = document.querySelector('.payment-modal')
const checkoutButton = document.getElementById('checkout');
var food = document.querySelectorAll('.final-order')
var seats = document.querySelectorAll('.payment-seats')
var totalCost = document.querySelector('.total-payment')
function showPayment(){
    // console.log('click on payment')
    console.log(seatSelected, total);

    paymentModal.classList.add('payment-open')
    // menuModal.classList.remove('menu-open')
    for( var i of food){
        for(var j of cart)
        i.textContent += j.name + ', '
    }

    for (var seat of seats){
        for(var j of seatSelected)
        seat.textContent += j + ', '
    }
    totalCost.textContent = total; 
}

for(const payment of paymentbtns){
    payment.addEventListener('click', showPayment)
}
checkoutButton.addEventListener('click', showPayment)
// End Show payments
selectFlight.addEventListener('click', function(event){
    //stopPropagation : stop propagation from child to parent tag
    event.stopPropagation()
})

