// slide show javascript
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 5000); // Change image every 5 seconds
}

// animating cards with jQuery
$( '.effect img' ).hover(function() {
  $( this ).fadeOut( 400 );
  $( this ).fadeIn( 50 );
});

// Gather Information variables

// Sign Up Button in Hero Image
var signUp = document.getElementById('signUp');

// Variables for storing Sign Up Information
var inputFirstName = document.getElementById('inputFirstName');
var inputLastName = document.getElementById('inputLastName');
var inputAddress = document.getElementById('inputAddress');
var inputAddress2 = document.getElementById('inputAddress2');
var inputCity = document.getElementById('inputCity');
var inputState = document.getElementById('inputState');
var inputZip = document.getElementById('inputZip');
var inputPhone = document.getElementById('inputPhone');
var inputEmail = document.getElementById('inputEmail');

// Variables for placing the information on the page .innerHTML
var firstNameId = document.getElementById('firstNameId');
var lastNameId = document.getElementById('lastNameId');
var addressId = document.getElementById('addressId');
var address2Id = document.getElementById('address2Id');
var cityId = document.getElementById('cityId');
var stateId = document.getElementById('stateId');
var zipId = document.getElementById('zipId');
var phoneId = document.getElementById('phoneId');
var emailId = document.getElementById('emailId');

// Button Variables for addEventListeners
var submitButton = document.getElementById('submitButton');
var closeButton = document.getElementById('closeButton');
var refreshModel = document.getElementById('refreshModel');

// Creating a listener for the submitButton
submitButton.addEventListener('click',() => {
event.preventDefault();

// hiding the signUp modol when the submitButton is clicked
signUp.style.display = "none";

// storing the Sign Up information from the signUp form
inputFirstName.value;
inputLastName.value;
inputAddress.value;
inputAddress2.value;
inputCity.value;
inputState.value;
inputZip.value;
inputPhone.value;
inputEmail.value;

// storing the Sign Up information into an innerHTML to be placed on the Confirmation modal
firstNameId.innerHTML = inputFirstName.value;
lastNameId.innerHTML = inputLastName.value;
addressId.innerHTML = inputAddress.value;
address2Id.innerHTML = inputAddress2.value;
cityId.innerHTML = inputCity.value;
stateId.innerHTML = inputState.value;
zipId.innerHTML = inputZip.value;
phoneId.innerHTML = inputPhone.value;
emailId.innerHTML = inputEmail.value;
});

// reloading page when the X button is clicked
closeButton.addEventListener('click',() => {
  location.reload(true);
});

// reloading the page when the Ok button is clicked
refreshModel.addEventListener('click',() => {
  location.reload(true);
});
