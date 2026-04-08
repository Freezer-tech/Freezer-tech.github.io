const venditeContainer = document.getElementById("vendite-container");
const acquistiContainer = document.getElementById("acquisti-container");
const dropdown = document.getElementById("dropdown-vendite");
const venditeMenu = document.querySelector(".dropdown");
const hamburger = document.getElementById("hamburger");
const navbar = document.querySelector(".navbar");

/* =============================================
   1. LOGICA MENU (HAMBURGER E DROPDOWN)
   ============================================= */

// Toggle Hamburger (Mobile)
if (hamburger) {
  hamburger.addEventListener("click", (e) => {
    navbar.classList.toggle("active");
    e.stopPropagation();
  });
}

// Toggle Dropdown Vendite
if (venditeMenu) {
  venditeMenu.addEventListener("click", (e) => {
    if (e.target.classList.contains("dropbtn")) {
      venditeMenu.classList.toggle("open");
      e.stopPropagation();
    }
  });
}

// Chiusura universale al click fuori
window.addEventListener("click", (e) => {
  // Chiude hamburger se clicchi fuori
  if (navbar && !navbar.contains(e.target)) {
    navbar.classList.remove("active");
  }
  // Chiude dropdown se clicchi fuori
  if (venditeMenu && !venditeMenu.contains(e.target)) {
    venditeMenu.classList.remove("open");
  }
});

// Chiude tutto quando clicchi un link
document.querySelectorAll(".navbar nav a").forEach(link => {
  link.addEventListener("click", () => {
    navbar.classList.remove("active");
    if (venditeMenu) venditeMenu.classList.remove("open");
  });
});


/* =============================================
   2. POPOLAMENTO DATI VENDITE
   ============================================= */
if (venditeContainer) {
  for (let piattaforma in vendite) {
    const div = document.createElement("div");
    div.classList.add("platform");

    const id = "platform-" + piattaforma.replace(/\s+/g, "-");
    div.id = id;

    const title = document.createElement("h3");
    title.textContent = piattaforma;
    div.appendChild(title);

    vendite[piattaforma].forEach(item => {
      const card = document.createElement("div");
      card.classList.add("card");
      card.innerHTML = `
        <a href="${item.link}" target="_blank">
          ${item.nome ?? ""} - ${item.persona}
        </a>
      `;
      div.appendChild(card);
    });

    venditeContainer.appendChild(div);

    // Creazione link nel dropdown
    if (dropdown) {
      const link = document.createElement("a");
      link.textContent = piattaforma;
      link.href = "#" + id;
      link.addEventListener("click", (e) => {
        e.preventDefault();
        document.getElementById(id).scrollIntoView({ behavior: "smooth" });
      });
      dropdown.appendChild(link);
    }
  }
}

/* =============================================
   3. POPOLAMENTO DATI ACQUISTI
   ============================================= */
if (acquistiContainer) {
  acquisti.forEach(item => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
      <a href="${item.link}" target="_blank">
        ${item.nome} - ${item.persona}
      </a>
    `;
    acquistiContainer.appendChild(card);
  });
}
