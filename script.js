const message =
  "Thank you for submitting your request. This month, Meris Kan, inhabitant of the Kingdom of Colchis will answer your request. It may take a few weeks as our Kingdom relies on hawks to deliver mails.";

document.getElementById("contact").addEventListener("submit", function (event) {
  event.preventDefault();
  alert(message);
});
