document.querySelector('.cta-btn').addEventListener('click', () => {
    alert('Get Started button clicked!');
  });
  
  const form = document.getElementById('message-form');

  form.addEventListener('submit', (event) => {
    event.preventDefault();
  
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    console.log('Form submitted:', { firstName, lastName, email, message });
  
    form.reset();
  });