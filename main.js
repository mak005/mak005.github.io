document.addEventListener("DOMContentLoaded", () => {
  // Listes de compétences
  const liste1 = ["HTML", "CSS", "VSCode", "PixelLab", "Canva"];
  const liste2 = [
    "JavaScript",
    "Dart/Flutter",
    "PHP",
    "MySQL",
    "Docker",
    "GitHub",
  ];
  const liste3 = ["Python", "Linux"];

  const maitrisees = document.querySelector(".maitrisees");
  liste1.forEach((etiquette) => {
    maitrisees.innerHTML += `<li class="etiquette">${etiquette}</li>`;
  });

  const enCours = document.querySelector(".en-cours");
  liste2.forEach((etiquette) => {
    enCours.innerHTML += `<li class="etiquette">${etiquette}</li>`;
  });

  const notions = document.querySelector(".notions");
  liste3.forEach((etiquette) => {
    notions.innerHTML += `<li class="etiquette">${etiquette}</li>`;
  });

  // Réalisations
  const projets = [
    {
      label: "Programmation web",
      titre: "Projets web",
      description:
        "Projets de développement web (HTML, CSS, JavaScript, PHP, Python), backend (MySQL).",
    },
    {
      label: "Design",
      titre: "Affiches & infographie",
      description:
        "Conception d'affiches et supports visuels via Canva et PixelLab.",
    },
    {
      label: "Design",
      titre: "Affiches & infographie",
      description:
        "Conception d'affiches et supports visuels via Canva et PixelLab.",
    },
    {
      label: "Design",
      titre: "Affiches & infographie",
      description:
        "Conception d'affiches et supports visuels via Canva et PixelLab.",
    },
    {
      label: "Création",
      titre: "Accessoires résine époxy",
      description:
        "Fabrication sur commande d'accessoires personnalisés en résine époxy.",
    },
    {
      label: "Création",
      titre: "Accessoires résine époxy",
      description:
        "Fabrication sur commande d'accessoires personnalisés en résine époxy.",
    },
    {
      label: "Création",
      titre: "Accessoires résine époxy",
      description:
        "Fabrication sur commande d'accessoires personnalisés en résine époxy.",
    },
  ];

  const grille = document.querySelector(".projects-grid");

  projets.forEach((projet) => {
    grille.innerHTML += `
    <div class="project-card">
      <p class="project-card-label">${projet.label}</p>
      <p class="project-card-title">${projet.titre}</p>
      <p class="project-card-desc">${projet.description}</p>
    </div>
  `;
  });

  // Contacts
  const contacts = [
    "mawuvivikoudoh@gmail.com",
    "linkedin.com/in/mawuvivi-koudoh",
    "github.com/midnightowl05",
  ];

  const contactsList = document.querySelector(".contacts-list");
  contacts.forEach((contact) => {
    let icon = "";
    if (contact.includes("gmail.com")) {
      icon = "fa-solid fa-envelope";
    } else if (contact.includes("linkedin.com")) {
      icon = "fa-brands fa-linkedin";
    } else if (contact.includes("github.com")) {
      icon = "fa-brands fa-github";
    }
    contactsList.innerHTML += `
      <div class="contact-item">
        <i class="${icon}"></i>
        <span>${contact}</span>
      </div>
    `;
  });
});
