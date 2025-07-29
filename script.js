/*
  Optional JavaScript for the AI Digital landing page.  At the moment
  it simply logs a message to the browser console when the page is
  loaded.  You can extend this script to implement form submission
  handling, interactive animations or other functionality.
*/

document.addEventListener('DOMContentLoaded', () => {
  console.log('Welcome to AI Digital! The page has loaded successfully.');

  // Enhance the contact form: validate, detect spam and trigger mailto
  const contactForm = document.getElementById('contactForm');
  const responseEl = document.getElementById('form-response');
  if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();
      // Basic non-empty check
      if (!name || !email || !message) {
        if (responseEl) {
          responseEl.textContent = 'Please fill out all fields.';
          responseEl.style.color = 'red';
        }
        return;
      }
      // Character limit check
      if (message.length > 300) {
        if (responseEl) {
          responseEl.textContent = 'Your message must be 300 characters or less.';
          responseEl.style.color = 'red';
        }
        return;
      }
      // Simple spam detection: block links and HTML tags
      const spamPattern = /(https?:\/\/|www\.|<|>)/i;
      if (spamPattern.test(message)) {
        if (responseEl) {
          responseEl.textContent = 'Your message appears to contain links or HTML and was flagged as spam.';
          responseEl.style.color = 'red';
        }
        return;
      }
      // Compose a mailto link and open it to send the email
      const subject = 'New Message from AI Digital Website';
      const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
      const mailtoLink = `mailto:testemail@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      // Trigger the mailto link
      window.location.href = mailtoLink;
      // Display thank you message
      if (responseEl) {
        responseEl.textContent = 'Thank you for getting in touch! Your message has been sent.';
        responseEl.style.color = 'green';
      }
      // Reset form fields
      contactForm.reset();
    });
  }
});