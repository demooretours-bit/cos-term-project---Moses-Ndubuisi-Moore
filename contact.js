document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const phone = document.getElementById('phone');
  const message = document.getElementById('message');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let isValid = true;

    // Reset error messages
    document.querySelectorAll('.error-msg').forEach(el => el.style.display = 'none');

    // 1. Name validation
    if (name.value.trim() === '') {
      document.getElementById('nameError').style.display = 'block';
      isValid = false;
    }

    // 2. Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value.trim())) {
      document.getElementById('emailError').style.display = 'block';
      isValid = false;
    }

    // 3. Phone validation (Digits only)
    const phoneRegex = /^\d+$/;
    if (!phoneRegex.test(phone.value.trim())) {
      document.getElementById('phoneError').style.display = 'block';
      isValid = false;
    }

    // 4. Message validation
    if (message.value.trim() === '') {
      document.getElementById('messageError').style.display = 'block';
      isValid = false;
    }

    if (isValid) {
      alert('Success! Your message has been sent successfully.');
      form.reset();
    }
  });
});