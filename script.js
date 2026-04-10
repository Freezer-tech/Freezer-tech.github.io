// ==============================
// SELETTORI
// ==============================

const venditeContainer = document.getElementById("vendite-container");
const acquistiContainer = document.getElementById("acquisti-container");
const dropdown = document.getElementById("dropdown-vendite");

const navbar = document.querySelector(".navbar");
const hamburger = document.getElementById("hamburger");
const venditeMenu = document.querySelector(".dropdown");


// ==============================
// MENU (HAMBURGER + DROPDOWN)
// ==============================

// Toggle hamburger
if (hamburger && navbar) {
  hamburger.addEventListener("click", (e) => {
    e.stopPropagation();
    navbar.classList.toggle("active");
  });
}

// Toggle dropdown
if (venditeMenu) {
  venditeMenu.addEventListener("click", (e) => {
    const isButton = e.target.classList.contains("dropbtn");

    if (!isButton) return;

    // Su mobile blocca il redirect
    if (window.innerWidth <= 600) {
      e.preventDefault();
    }

    e.stopPropagation();
    venditeMenu.classList.toggle("open");
  });
}

// Click fuori = chiudi tutto
window.addEventListener("click", (e) => {
  if (navbar && !navbar.contains(e.target)) {
    navbar.classList.remove("active");
  }

  if (venditeMenu && !venditeMenu.contains(e.target)) {
    venditeMenu.classList.remove("open");
  }
});

// Chiudi menu quando clicchi link normali
document.querySelectorAll(".navbar nav > a:not(.dropbtn)").forEach(link => {
  link.addEventListener("click", () => {
    navbar?.classList.remove("active");
  });
});


// ==============================
// FUNZIONI UTILI
// ==============================

// Crea card link
function createCard(item) {
  const card = document.createElement("div");
  card.classList.add("card");

  const link = document.createElement("a");
  link.href = item.link;
  link.target = "_blank";
  link.textContent = `${item.nome ?? ""} - ${item.persona}`;

  card.appendChild(link);
  return card;
}

// Scroll + chiusura menu
function handleScrollTo(id) {
  navbar?.classList.remove("active");
  venditeMenu?.classList.remove("open");

  const target = document.getElementById(id);
  if (target) {
    target.scrollIntoView({ behavior: "smooth" });
  }
}


// ==============================
// POPOLAMENTO VENDITE
// ==============================

if (venditeContainer && typeof vendite !== "undefined") {

  Object.entries(vendite).forEach(([piattaforma, items]) => {

    const section = document.createElement("div");
    section.classList.add("platform");

    const id = "platform-" + piattaforma.replace(/\s+/g, "-");
    section.id = id;

    const title = document.createElement("h3");
    title.textContent = piattaforma;

    section.appendChild(title);

    items.forEach(item => {
      section.appendChild(createCard(item));
    });

    venditeContainer.appendChild(section);

    // Link nel dropdown
    if (dropdown) {
      const link = document.createElement("a");
      link.href = `#${id}`;
      link.textContent = piattaforma;

      link.addEventListener("click", (e) => {
        e.preventDefault();
        handleScrollTo(id);
      });

      dropdown.appendChild(link);
    }
  });
}


// ==============================
// POPOLAMENTO ACQUISTI
// ==============================

if (acquistiContainer && typeof acquisti !== "undefined") {

  acquisti.forEach(item => {
    acquistiContainer.appendChild(createCard(item));
  });

}
