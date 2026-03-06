const API="YOUR_GOOGLE_SCRIPT_URL";

async function loadTreks(){

const res=await fetch(API);

const data=await res.json();

const container=document.getElementById("trek-container");

const dropdown=document.getElementById("destination");

if(container) container.innerHTML="";

if(dropdown) dropdown.innerHTML="<option>Select Trek</option>";

data.forEach(trek=>{

if(trek.status==="active"){

if(container){

container.innerHTML+=`

<div class="card">

<h3>${trek.trek_name}</h3>

<p>${trek.short_desc}</p>

<p>₹ ${trek.price}</p>

<button class="btn-primary" onclick="openModal('${trek.trek_name}')">Book</button>

</div>

`;

}

if(dropdown){

dropdown.innerHTML+=`

<option value="${trek.trek_name}">

${trek.trek_name}

</option>

`;

}

}

});

const list=document.getElementById("trek-list");

if(list){

data.forEach(trek=>{

list.innerHTML+=`

<div class="card" onclick="toggle(this)">

<h3>${trek.trek_name}</h3>

<div class="details">

<p>Location: ${trek.location}</p>

<p>Price: ₹${trek.price}</p>

<p>${trek.full_desc}</p>

</div>

</div>

`;

});

}

}

loadTreks();

function toggle(el){

const details=el.querySelector(".details");

details.style.display=

details.style.display==="block"

? "none"

: "block";

}

function openModal(trek=""){

document.getElementById("bookingModal").style.display="flex";

if(trek){

document.getElementById("destination").value=trek;

}

}

function closeModal(){

document.getElementById("bookingModal").style.display="none";

}

document.addEventListener("DOMContentLoaded",function(){

const booking=document.getElementById("bookingForm");

if(booking){

booking.addEventListener("submit",function(e){

e.preventDefault();

alert("Booking Submitted!");

closeModal();

});

}

const contact=document.getElementById("contactForm");

if(contact){

contact.addEventListener("submit",function(e){

e.preventDefault();

document.getElementById("successMsg").style.display="block";

contact.reset();

});

}

});
