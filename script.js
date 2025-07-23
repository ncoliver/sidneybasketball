const createCard = (imageName) => {
  // Extract the name without extension for the title
  const titleName = imageName.split(".")[0].toLowerCase();

  // Team information object
  const teamInfo = {
    clavijo: "Contributed with my versatility in the power forward position.",
    palma:
      "As MVP of the season, Sid strengthened the interior game, being the heart of the roster in his third season. ",
    real: "Achieved 7 blocks in a game and a 28 valuation in the win against CBA Gran Canaria",
    sporting: "Developed key skills as a power forward in the interior game.",
  };

  // Get team-specific information
  const teamDescription = teamInfo[titleName] || "Team photo and highlights";

  // Create the card HTML
  const cardHTML = `
        <div class="col-md-6 col-lg-3 mb-4">
            <div class="card-dark h-100 border border-light">
                <img src="images/${imageName}" class="card-img-top" alt="${titleName}" style="height: 200px; object-fit: cover;">
                <div class="card-body">
                    <h5 class="card-title">${titleName}</h5>
                    <p class="card-text">${teamDescription}</p>
                </div>
            </div>
        </div>
    `;

  return cardHTML;
};

// Array of image filenames
const imageFiles = ["clavijo.jpg", "palma.jpeg", "real.jpg", "sporting.jpg"];

// Function to generate all cards
const generateAllCards = () => {
  const cardsContainer = document.getElementById("cards-container");
  if (cardsContainer) {
    cardsContainer.innerHTML = imageFiles
      .map((imageName) => createCard(imageName))
      .join("");
  }
};

// Initialize cards when DOM is loaded
document.addEventListener("DOMContentLoaded", generateAllCards);
