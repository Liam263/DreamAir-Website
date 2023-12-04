const seats = document.querySelectorAll('.seat');
const selectedSeats = document.querySelector('.selected-seats ul');
const totalCost = document.querySelector('#total-cost');
let selectedCount = 0;
let total = 0;
let seatSelected = [];
seats.forEach(seat => {
	seat.addEventListener('click', () => {
		if (seat.classList.contains('selected')) {
			seat.classList.remove('selected');
			selectedCount-=1;
			total -= parseInt(seat.querySelector('.price').innerHTML);
			
			// updateSelectedSeats();
			totalCost.innerHTML = total;
			seatSelected.pop(seat.querySelector('.seat-number').innerHTML)
			console.log(seatSelected)
		}else if (seat.classList.contains('available') && selectedCount < 3) {
			seat.classList.toggle('selected');
			selectedCount++;
			total += parseInt(seat.querySelector('.price').innerHTML);
			
			// updateSelectedSeats();
			totalCost.innerHTML = total;
			seatSelected.push(seat.querySelector('.seat-number').innerHTML)
			console.log(seatSelected)
		} 
	});
});

export { seatSelected, total };