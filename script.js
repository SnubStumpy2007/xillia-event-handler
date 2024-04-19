document.getElementById("btn").addEventListener("click", function () {
  const inputText = document.getElementById("input").value;
  switch (inputText) {
    case "Jude Mathis":
      const introJude = document.getElementById("bio");
      introJude.textContent =
        "Jude Mathis: A driven and compassionate medical student from the rural village of Leronde, Jude's journey begins when he encounters Milla Maxwell, setting him on a path of self-discovery and adventure. Despite his young age, Jude possesses a keen intellect and a strong sense of justice, which he utilizes to navigate the complexities of the world around him, all while striving to heal the wounds of those he encounters.";
      const imageJude = document.getElementById("character-image");
      imageJude.src = "img/jude.jpg";
      break;
    case "Milla Maxwell":
      const introMilla = document.getElementById("bio");
      introMilla.textContent =
        "Milla Maxwell: Mysterious and powerful, Milla is a woman on a divine mission to save her realm from destruction. As the incarnation of the Great Spirit Maxwell, she possesses immense abilities that make her both feared and revered. Despite her regal demeanor, Milla is deeply compassionate and driven by a sense of duty to protect the world and its inhabitants, leading her to forge unlikely alliances and confront the very forces threatening her existence.";
      const imageMilla = document.getElementById("character-image");
      imageMilla.src = "img/milla.jpg";
      break;
    case "Leia Rolando":
      const introLeia = document.getElementById("bio");
      introLeia.textContent =
        "Leia Rolando: Spirited and determined, Leia is a young journalist with a fiery passion for uncovering the truth. Despite her lack of combat prowess, Leia proves herself to be a valuable asset to the group with her resourcefulness and unwavering loyalty to her friends. Throughout their journey, Leia's boundless energy and optimism serve as a source of inspiration to those around her, driving them forward even in the face of overwhelming odds.Also a nursing student";
      const imageLeia = document.getElementById("character-image");
      imageLeia.src = "img/leia.jpg";
      break;
    case "Elize Lutus":
      const introElize = document.getElementById("bio");
      introElize.textContent =
        "Elize Lutus: Quiet and introverted, Elize is a young girl who has endured a troubled past, finding solace and companionship in the form of Teepo, a spirited creature who becomes her constant companion. Despite her timid nature, Elize possesses remarkable inner strength, which she gradually learns to harness as she embarks on a journey of self-discovery, confronting her fears and forging bonds of friendship that will shape her destiny.";
      const imageElize = document.getElementById("character-image");
      imageElize.src = "img/elize.jpg";
      break;
    case "Rowen J. Ilbert":
      const introRowen = document.getElementById("bio");
      introRowen.textContent =
        "Rowen J. Ilbert: Wise and dignified, Rowen is a seasoned strategist and former government official who brings a wealth of experience and knowledge to the group. Despite his advanced age, Rowen remains a formidable combatant, possessing a keen intellect and masterful command of both magic and tactics. As the group's elder statesman, Rowen serves as a mentor and advisor, offering sage counsel that guides them through the trials and tribulations of their journey.Old man Tactician";
      const imageRowen = document.getElementById("character-image");
      imageRowen.src = "img/rowen.jpg";
      break;
    case "Alvin":
      const introAlvin = document.getElementById("bio");
      introAlvin.textContent =
        "ThAlvin: A charming and enigmatic mercenary with a checkered past, Alvin is a man of many secrets and hidden agendas. Despite his roguish exterior, Alvin possesses a complex moral compass, torn between loyalty to his friends and the temptations of personal gain. As the group's resident cynic, Alvin provides a pragmatic perspective that often challenges the group's idealism, forcing them to confront uncomfortable truths about the world they inhabit.e traitor";
      const imageAlvin = document.getElementById("character-image");
      imageAlvin.src = "img/alvin.jpg";
      break;
    default:
      alert("Invalid choice");
  }
});

document.getElementById("reset-btn").addEventListener("click", function () {
  location.reload();
});
