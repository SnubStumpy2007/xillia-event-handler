document.getElementById("btn").addEventListener("click", function () {
  const inputText = document.getElementById("input").value;
  switch (inputText) {
    case "Jude Mathis":
      const introJude = document.getElementById("bio");
      introJude.textContent = "Jude Mathis is a Med Student";
      const imageJude = document.getElementById("character-image");
      imageJude.src = "img/jude.jpg";
      break;
      case "Milla Maxwell":
      const introMilla = document.getElementById("bio");
      introMilla.textContent = "Milla Maxwell is a god";
      const imageMilla = document.getElementById("character-image");
      imageMilla.src = "img/milla.jpg";
      break;
      case "Leia Rolando":
      const introLeia = document.getElementById("bio");
      introLeia.textContent = "Also a nursing student";
      const imageLeia = document.getElementById("character-image");
      imageLeia.src = "img/leia.jpg";
      break;
      case "Elize Lutus":
      const introElize = document.getElementById("bio");
      introElize.textContent = "Healer.  Her best friend is Teepo";
      const imageElize = document.getElementById("character-image");
      imageElize.src = "img/elize.jpg";
      break;
      case "Rowen J. Ilbert":
      const introRowen = document.getElementById("bio");
      introRowen.textContent = "Old man Tactician";
      const imageRowen = document.getElementById("character-image");
      imageRowen.src = "img/rowen.jpg";
      break;
      case "Alvin":
      const introAlvin = document.getElementById("bio");
      introAlvin.textContent = "The traitor";
      const imageAlvin = document.getElementById("character-image");
      imageAlvin.src = "img/alvin.jpg";
      break;
      default:
            alert("Invalid choice");
  }
});
