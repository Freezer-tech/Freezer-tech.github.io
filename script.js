const venditeContainer = document.getElementById("vendite-container");
const acquistiContainer = document.getElementById("acquisti-container");
const dropdown = document.getElementById("dropdown-content");
const venditeMenu = document.querySelector(".dropdown");
const hamburger = document.getElementById("hamburger");
const navbar = document.querySelector(".navbar");

/* =============================================
   1. LOGICA MENU (HAMBURGER E DROPDOWN)
   ============================================= */

// Toggle Hamburger
if (hamburger) {
  hamburger.addEventListener("click", (e) => {
    navbar.classList.toggle("active");
    e.stopPropagation();
  });
}

// Toggle Dropdown Transazioni
if (venditeMenu) {
  venditeMenu.addEventListener("click", (e) => {
    // Se clicco sulla scritta "Transazioni"
    if (e.target.classList.contains("dropbtn")) {
      // Su mobile impedisce il salto pagina immediato per permettere l'apertura
      if (window.innerWidth <= 600) {
        e.preventDefault(); 
      }
      venditeMenu.classList.toggle("open");
      e.stopPropagation();
    }
  });
}

// Chiusura universale
window.addEventListener("click", (e) => {
  if (navbar && !navbar.contains(e.target)) {
    navbar.classList.remove("active");
  }
  if (venditeMenu && !venditeMenu.contains(e.target)) {
    venditeMenu.classList.remove("open");
  }
});

// Chiude l'hamburger solo se clicchi link diretti (Home o Chi sono)
document.querySelectorAll(".navbar nav > a").forEach(link => {
  link.addEventListener("click", () => {
    navbar.classList.remove("active");
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
        
        // 1. Chiude i menu
        navbar.classList.remove("active");
        venditeMenu.classList.remove("open");

        // 2. Scroll fluido
        const targetElement = document.getElementById(id);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
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
