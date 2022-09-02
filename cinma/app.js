let seats = document.querySelectorAll(".row .seat:not(.occupied)");
let movieSelect = document.querySelector("#movie");
let total = document.querySelector("#total");
let count = document.querySelector("#count");
let moviePrice = +movieSelect.value;
console.log(moviePrice);
showData()
updateSelectedCount() 
// seats : loop + event  listener
seats.forEach((seatsValue) => {
    seatsValue.addEventListener("click", function (e) {
    let clickEvent = e.target;
    clickEvent.classList.toggle("selected");
    updateSelectedCount();
  });
});
// function save to local storage
function saveToLocalStorage(data) {
  localStorage.setItem("localSeats", JSON.stringify(data));
}
// function Update prices and seats
function updateSelectedCount() {
  let SelectedArray = document.querySelectorAll(".row .seat.selected");
  let seatsIndex = [...SelectedArray].map(function(seat){
    return [...seats].indexOf(seat);
});
saveToLocalStorage(seatsIndex)
  let countLength = SelectedArray.length;
  count.innerText = countLength;
  total.innerText = countLength * moviePrice;
} 
// update movie Price select (event) 
movieSelect.addEventListener('click', (e) =>{
    moviePrice = +e.target.value;
    updateSelectedCount();
})
function showData(){
    let selectedSeats = JSON.parse(localStorage.getItem('localSeats'));
     if(selectedSeats!== null){ 
         seats.forEach((seat,index)=>{
           if(selectedSeats.indexOf(index)>-1){
             seat.classList.add('selected');
          }
        });
     }
} 
