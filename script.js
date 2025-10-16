document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("bookingForm");
  const confirmation = document.getElementById("confirmationMessage");

  if (form) {
    form.addEventListener("submit", async function (e) {
      e.preventDefault();

      const formData = new FormData(form);

      try {
        const response = await fetch(form.action, {
          method: form.method,
          body: formData,
          headers: {
            Accept: "application/json",
          },
        });

        if (response.ok) {
          confirmation.textContent =
            "🐾 Thank you! Your booking has been received. We'll reach out soon!";
          confirmation.style.color = "green";
          form.reset();
        } else {
          confirmation.textContent =
            "❌ Oops! Something went wrong. Please try again.";
          confirmation.style.color = "red";
        }
      } catch (error) {
        confirmation.textContent =
          "⚠️ Network error. Please try again later.";
        confirmation.style.color = "red";
      }
    });
  }
});
