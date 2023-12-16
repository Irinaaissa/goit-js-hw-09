

  const form = document.querySelector('.feedback-form');

form.addEventListener('input', function (event) {
    const formData = {
        email: document.querySelector("[name='email']").value,
        message: document.querySelector("[name='message']").value,
    };
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
    localStorage.setItem('email', JSON.stringify(formData.email));
    localStorage.setItem('message', JSON.stringify(formData.message));
});

document.addEventListener('DOMContentLoaded', function () {
    
    const savedEmail = JSON.parse(localStorage.getItem('email'));
    const savedMessage = JSON.parse(localStorage.getItem('message'));

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
});