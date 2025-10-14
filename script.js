// Handle booking form submission for SS Pets
document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("bookingForm");
  const confirmation = document.getElementById("confirmationMessage");

  if (form) {
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      
      const name = document.getElementById("name").value;
      const service = document.getElementById("service").value;
      const date = document.getElementById("date").value;
      const time = document.getElementById("time").value;

      confirmation.textContent = `🐾 Thank you, ${name}! Your ${service.replace('-', ' ')} appointment is booked for ${date} at ${time}.`;
      form.reset();
    });
  }
});
