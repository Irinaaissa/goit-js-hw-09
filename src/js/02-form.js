

  const form = document.querySelector('.feedback-form');

form.addEventListener('input', function (event) {
    const formData = {
        email: document.querySelector("[name='email']").value,
        message: document.querySelector("[name='message']").value,
    };
    localStorage.setItem('feedback-form-state', JSON.stringify(Object.fromEntries(new FormData(form))));
    
});

document.addEventListener('DOMContentLoaded', function () {
    
    let storedData = localStorage.getItem('feedback-form-state');

  if (storedData) {
    storedData = JSON.parse(storedData);
    document.querySelector('input[name="email"]').value = storedData.email || "";
    document.querySelector('textarea[name="message"]').value = storedData.message || "";
  }

});

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
    localStorage.removeItem('feedback-form-state'); //очищає форму після сабміту
});