
 //First class section
 var add = document.getElementById('add').addEventListener('click', function(){
    handleTicket(true);

 })
 var minus = document.getElementById('minus').addEventListener('click', function() {
     handleTicket(false);
     
 })
 function handleTicket(add){
     var fClassTicketInput = document.getElementById('first-class');
     var fClassTicketNum = parseInt(fClassTicketInput.value);
   if(add == true){
     totalFcticket = fClassTicketNum + 1;

   }
   if(add == false && fClassTicketNum > 0){
     totalFcticket = fClassTicketNum - 1;
   }
     document.getElementById('first-class').value = totalFcticket;
     calculateTotal()
}

//economy class section......
var add2 = document.getElementById('add2').addEventListener('click', function() {
handleTicket2(true);

})
var minus2 = document.getElementById('minus2').addEventListener('click', function() {
handleTicket2(false);

})
function handleTicket2(add){
     var eClassTicketInput = document.getElementById('economy-class');
     var eClassTicketNum = parseInt(eClassTicketInput.value);
   if(add == true){
     totalEcticket = eClassTicketNum + 1;

   }
   if(add == false && eClassTicketNum > 0){
     totalEcticket = eClassTicketNum - 1;
   }
     document.getElementById('economy-class').value = totalEcticket;
     calculateTotal()
}


//total section..........
function calculateTotal(){
var fClassInput = document.getElementById('first-class');
var fClassNum = parseInt(fClassInput.value);

var eClassInput = document.getElementById('economy-class');
var eClassNum = parseInt(eClassInput.value);

const totalPrice = fClassNum * 150 + eClassNum * 100;
document.getElementById('subtotal').innerText = '$' + totalPrice;


const vatNum = totalPrice / 10;
const vatAmount = Math.round(vatNum)
document.getElementById('total-vat').innerText = '$' + vatAmount;

const grandTotal = totalPrice + vatAmount;
document.getElementById('grandTotal').innerText = '$' + grandTotal;


}

//hidding section
var click = document.getElementById('clickeffectbtn').addEventListener('click', function () {
var hide = document.getElementById('first')
hide.style.display = "none"
var show = document.getElementById('click1')
show.style.display = "block";

})

