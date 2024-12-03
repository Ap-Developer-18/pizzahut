document.addEventListener("DOMContentLoaded", function () {
  // Get elements
  const dropdownTrigger = document.querySelector("#dropdownMenuButton");
  const dropdownMenu = document.querySelector(".custom-options");
  const arrow = dropdownTrigger.querySelector(".arrow");
  const triggerImage = dropdownTrigger.querySelector("img"); // Flag image in the trigger

  // Toggle dropdown visibility on click
  dropdownTrigger.addEventListener("click", function () {
    const isOpen = dropdownMenu.style.display === "block";
    dropdownMenu.style.display = isOpen ? "none" : "block"; // Toggle visibility
    arrow.style.transform = isOpen ? "rotate(0deg)" : "rotate(180deg)"; // Rotate the arrow
  });

  // Handle flag selection
  const flagItems = document.querySelectorAll(".dropdown-item");
  flagItems.forEach((item) => {
    item.addEventListener("click", function () {
      const selectedFlag = item.querySelector("img").src; // Get selected flag's image URL
      triggerImage.src = selectedFlag; // Update the main flag image

      // Close the dropdown and reset arrow rotation
      dropdownMenu.style.display = "none";
      arrow.style.transform = "rotate(0deg)";
    });
  });

  // Close the dropdown if clicked outside
  document.addEventListener("click", function (event) {
    if (!dropdownTrigger.contains(event.target)) {
      dropdownMenu.style.display = "none"; // Close the dropdown if clicked outside
      arrow.style.transform = "rotate(0deg)"; // Reset arrow
    }
  });
});