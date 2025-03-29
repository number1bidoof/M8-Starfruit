let numPut = document.getElementById('inputField');
let submitBtn = document.getElementById('submitbtn');
let submitForm = document.getElementById('myForm');
function AplhaNumChecker(i){
  return /^[a-zA-Z0-9]+$/.test(i);
}
submitBtn.addEventListener('click', function(event){
  if (AplhaNumChecker(numPut.value)) {
    numPut.setCustomValidity("Valid input :)");
  } else {
    numPut.setCustomValidity("Invalid input, please enter alphanumeric value");
  }
  numPut.reportValidity();
})
submitForm.addEventListener("submit", function(event){
  if (!AplhaNumChecker(numPut.value)){
    event.preventDefault();
  } else {
    window.alert("Valid input :)");
  }
})