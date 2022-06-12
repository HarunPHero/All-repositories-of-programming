
 //first class section
 var add = document.getElementById('add').addEventListener('click', function(){
            
    handleTicket(true);
 })
 var minus = document.getElementById('minus').addEventListener('click', function(){
    
    handleTicket(false);
 })
 function handleTicket(add) {
    var fClassNumber = document.getElementById('first-class');
    var fClassTicket = parseFloat(fClassNumber.value);

   if(add == true){
    totalfClassTicket = fClassTicket + 1
    }
    if(add == false && fClassTicket > 0){

    totalfClassTicket = fClassTicket - 1
    }

    document.getElementById('first-class').value = totalfClassTicket;
    calculateTotal()
     
 }



 //economy section
var add2 = document.getElementById('add2').addEventListener('click', function() {
    handleTicket2(true)

    
})
var minus2 = document.getElementById('minus2').addEventListener('click', function() {
    handleTicket2(false)
    
    
})
function handleTicket2(add2) {
    var eNumber = document.getElementById('economy-class');
    var eTicket = parseFloat(eNumber.value);

   if(add2 == true){
    totaleTicket = eTicket + 1
    }
    if(add2 == false && eTicket > 0){

    totaleTicket = eTicket - 1
    }

    document.getElementById('economy-class').value = totaleTicket;
    calculateTotal()
     
 }



 //total section
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
