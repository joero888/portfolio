// Show form when the "Contact Me" button is clicked
document.getElementById("contactBtn").addEventListener("click", () => {
  const contactForm = document.getElementById("contactForm");
  contactForm.style.display = "block"; // Show form
});

// Handle form submission
document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent default form submission behavior

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  console.log("Name:", name);
  console.log("Email:", email);
  console.log("Message:", message);

  alert("Thank you for your message!");
});

const toggleBtn = document.getElementById("toggleDark");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

  