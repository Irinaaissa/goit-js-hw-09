

document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.feedback-form');
  let storedEmail = localStorage.getItem('email');
  let storedMessage = localStorage.getItem('message');
  
  localStorage.removeItem('email');
  localStorage.removeItem('message');
  
  if (storedEmail && storedMessage) {
    document.querySelector('input[name="email"]').value = JSON.parse(storedEmail);
    document.querySelector('textarea[name="message"]').value = JSON.parse(storedMessage);
  }


  form.addEventListener('submit', function (event) {
    event.preventDefault();

    let email = document.querySelector("[name='email']").value;
    let message = document.querySelector("[name='message']").value;

    if (!email || !message) {
      alert('Please fill in both fields!');
    } else {
      console.log({ email, message });
      localStorage.setItem('email', JSON.stringify(email));
      localStorage.setItem('message', JSON.stringify(message));
    }

    document.querySelector("[name='email']").value = '';
    document.querySelector("[name='message']").value = '';

    event.target.reset();
  });
});