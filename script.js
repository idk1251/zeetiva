document.addEventListener("DOMContentLoaded", () => {
  // Donation data
  const currentDonation = 2830; // Current amount in dollars
  const donationGoal = 10000; // Goal amount in dollars

  // Calculate the progress percentage
  const progressPercentage = (currentDonation / donationGoal) * 100;

  // Update the progress bar width
  const progressBar = document.querySelector(".progress");
  progressBar.style.width = `${progressPercentage}%`;

  // Update the progress text
  const progressText = document.querySelector(".progress-text");
  progressText.textContent = `$${currentDonation.toLocaleString()} / $${donationGoal.toLocaleString()}`;
  
  // Show the popup when the info button is clicked
  const infoButton = document.querySelector(".info-button");
  const popup = document.querySelector(".popup");
  const closeBtn = document.querySelector(".close-btn");

  infoButton.addEventListener("click", () => {
    popup.style.display = "flex";
  });

  // Close the popup by clicking the close button or outside the popup
  closeBtn.addEventListener("click", () => {
    popup.style.display = "none";
  });

  window.addEventListener("click", (event) => {
    if (event.target === popup) {
      popup.style.display = "none";
    }
  });
});

// Function to copy the crypto address
function copyAddress(id) {
  const address = document.getElementById(id).textContent;
  navigator.clipboard.writeText(address)
    .then(() => {
      alert("Address copied to clipboard!");
    })
    .catch(err => {
      console.error("Failed to copy address: ", err);
    });
}
