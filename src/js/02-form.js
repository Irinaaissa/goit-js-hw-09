
const form = document.querySelector('.feedback-form');

form.addEventListener('input', function(event) {
  const inputs = this.elements;
  const formData = {};

  for (let input of inputs) {
    if (input.type === 'email' || input.type === 'textarea') {
      formData[input.name] = input.value;
    }
  }

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});
document.addEventListener("DOMContentLoaded", function() {
  
  if(localStorage.getItem("email") && localStorage.getItem("message")) {
    document.querySelector('input[name="email"]').value = localStorage.getItem("email");
    document.querySelector('textarea[name="message"]').value = localStorage.getItem("message");
  }
});


document.querySelector('.feedback-form').addEventListener("submit", function(event) {

  let emailValue = document.querySelector('input[name="email"]').value;
  let messageValue = document.querySelector('textarea[name="message"]').value;
  
  
  localStorage.setItem("email", emailValue);
  localStorage.setItem("message", messageValue);
});
document.querySelector(".feedback-form").addEventListener("submit", function(event) {
  event.preventDefault(); 

  
  let email = document.querySelector("[name='email']").value;
  let message = document.querySelector("[name='message']").value;

  
  console.log({ email, message });


  document.querySelector("[name='email']").value = "";
  document.querySelector("[name='message']").value = "";
});