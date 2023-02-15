// Add hover effect to the header
document.querySelector(".header").addEventListener("mouseenter", function() {
    this.style.backgroundColor = "red";
  });
  
  document.querySelector(".header").addEventListener("mouseleave", function() {
    this.style.backgroundColor = "#333";
  });
  
  // Add a button to toggle the visibility of the contact information
  var footer = document.querySelector(".footer");
  var contactInfo = footer.querySelector("p");
  
  var button = document.createElement("button");
  button.textContent = "Toggle Contact Information";
  footer.insertBefore(button, contactInfo);
  
  button.addEventListener("click", function() {
    contactInfo.classList.toggle("hidden");
  });
  