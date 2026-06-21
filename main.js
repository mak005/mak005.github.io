document.addEventListener("DOMContentLoaded", () => {
  // SECTION 2 - Compétences
  const liste1 = ["HTML", "CSS", "JavaScript", "PHP"];
  const liste2 = ["Dart", "Flutter"];
  const liste3 = ["Python", "C#"];
  const liste4 = ["MySQL"];
  const liste5 = [
    "Visual Studio",
    "Visual Studio Code",
    "GitHub",
    "Postman",
    "Docker",
  ];
  const liste6 = ["Word", "Excel", "PowerPoint"];
  const liste7 = ["Canva", "PixelLab"];

  const langages = document.querySelector(".langages");
  liste1.forEach((etiquette) => {
    langages.innerHTML += `<li class="etiquette">${etiquette}</li>`;
  });

  const devMobile = document.querySelector(".dev-mobile");
  liste2.forEach((etiquette) => {
    devMobile.innerHTML += `<li class="etiquette">${etiquette}</li>`;
  });

  const programmation = document.querySelector(".programmation");
  liste3.forEach((etiquette) => {
    programmation.innerHTML += `<li class="etiquette">${etiquette}</li>`;
  });

  const bd = document.querySelector(".bd");
  liste4.forEach((etiquette) => {
    bd.innerHTML += `<li class="etiquette">${etiquette}</li>`;
  });

  const outils = document.querySelector(".outils");
  liste5.forEach((etiquette) => {
    outils.innerHTML += `<li class="etiquette">${etiquette}</li>`;
  });

  const bureautique = document.querySelector(".bureautique");
  liste6.forEach((etiquette) => {
    bureautique.innerHTML += `<li class="etiquette">${etiquette}</li>`;
  });

  const design = document.querySelector(".design");
  liste7.forEach((etiquette) => {
    design.innerHTML += `<li class="etiquette">${etiquette}</li>`;
  });

  // SECTION 3 - Réalisations

  // Projets
  const projets = [
    {
      label: "Programmation web",
      titre: "Projets web",
      description:
        "Quelques interfaces web.",
      photos: [
        "images/Interface-app-messages-1.png",
        "images/Interface-app-messages-2.png",
        "images/Interface-app-messages-3.png",
        "images/Interface-app-messages-4.png",
        "images/Interface-app-mobile-repertoire.png",
        "images/Interface-connexion-flutter.png",
        "images/Interface-inscription-flutter.png",
        "images/Interface-discussions-whatsapp-flutter1.png",
        "images/Interface-discussions-whatsapp-flutter2.png",
      ],
    },
    {
      label: "Design",
      titre: "Affiches & infographie",
      description:
        "Affiches et supports visuels via PixelLab.",
      photos: [
        "images/Mon-logo-pixellab.jpeg",
        "images/Mon-affiche-pixellab.jpeg",
        "images/Affiche-pixellab-2.jpeg",
        "images/Affiche-pixellab-3.jpeg",
        "images/Affiche-pixellab-4.jpeg",
        "images/Affiche-pixellab-5.jpeg",
        "images/Affiche-pixellab-6.jpeg",
        "images/Affiche-pixellab-7.jpeg",
        "images/Affiche-pixellab-8.jpeg",
        "images/Affiche-pixellab-9.jpeg",
        "images/Affiche-pixellab-10.jpeg",
        "images/Flyer-pixellab-1.jpeg",
        "images/Carte-visite-pixellab-1.jpeg",

      ],
    },
    // {
    //   label: "Création",
    //   titre: "Accessoires résine époxy",
    //   description:
    //     "Fabrication sur commande d'accessoires personnalisés en résine époxy.",
    //   photos: [],
    // },
  ];

  // Onglets
  const categories = document.querySelector(".categories");
  projets.forEach((projet) => {
    categories.innerHTML += `<button class="onglet">${projet.label}</button>`;
  });

  const onglets = document.querySelectorAll(".onglet");
  const hint = document.querySelector(".description2");
  const grille = document.querySelector(".projects-grid");

  onglets.forEach((onglet) => {
    onglet.addEventListener("click", () => {
      onglets.forEach((btn) => btn.classList.remove("active"));
      onglet.classList.add("active");
      const projet = projets.find((p) => p.label === onglet.textContent);

      const photosHTML = projet.photos
        .map(
          (src) =>
            `<img src="${src}" alt="${projet.titre}" class="projet-photo">`,
        )
        .join("");

      hint.style.display = "none";

      grille.innerHTML = `
      <div class="projet-detail">
        <h3>${projet.titre}</h3>
        <p class="description2">${projet.description}</p>
        <div class="photos-grid">${photosHTML}</div>
      </div>
     `;
    });
  });

  // Contacts
  const contacts = [
    "mawuvivikoudoh@gmail.com",
    "https://mak005.github.io",
  ];

  const contactsList = document.querySelector(".contacts-list");
  contacts.forEach((contact) => {
    let icon = "";
    if (contact.includes("gmail")) {
      icon = "fa-solid fa-envelope";
    } else if (contact.includes("linkedin")) {
      icon = "fa-brands fa-linkedin";
    } else if (contact.includes("github")) {
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
