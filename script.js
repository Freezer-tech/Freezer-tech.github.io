const venditeContainer = document.getElementById("vendite-container");
const acquistiContainer = document.getElementById("acquisti-container");
const dropdown = document.getElementById("dropdown-vendite");
const venditeMenu = document.querySelector(".dropdown");
const hamburger = document.getElementById("hamburger");
const navbar = document.querySelector(".navbar");

/* =============================================
   1. LOGICA MENU (HAMBURGER E DROPDOWN)
   ============================================= */

// Toggle Hamburger
if (hamburger && navbar) {
  hamburger.addEventListener("click", (e) => {
    navbar.classList.toggle("active");
    e.stopPropagation();
  });
}

// Toggle Dropdown Vendite
if (venditeMenu) {
  venditeMenu.addEventListener("click", (e) => {
    // Apriamo/chiudiamo solo se clicchiamo sul tasto "Vendite"
    if (e.target.classList.contains("dropbtn")) {
      // Se siamo su mobile, evitiamo che il click sul link faccia saltare la pagina
      if (window.innerWidth <= 600) {
        e.preventDefault();
      }
      venditeMenu.classList.toggle("open");
      e.stopPropagation();
    }
  });
}

// Chiusura universale al click fuori
window.addEventListener("click", (e) => {
  if (navbar && !navbar.contains(e.target)) {
    navbar.classList.remove("active");
  }
  if (venditeMenu && !venditeMenu.contains(e.target)) {
    venditeMenu.classList.remove("open");
  }
});

// Chiude l'hamburger quando clicchi "Home" o "Acquisti" 
// (ma NON quando clicchi "Vendite", altrimenti il sottomenu sparisce subito)
document.querySelectorAll(".navbar nav > a:not(.dropbtn)").forEach(link => {
  link.addEventListener("click", () => {
   if (navbar) navbar.classList.remove("active");
  });
});

/* =============================================
   2. FUNZIONE SICURA PER CREARE LINK
   ============================================= */

function creaLink(item) {
  const link = document.createElement("a");

  link.href = item.link || "#";
  link.target = "_blank";
  link.rel = "noopener noreferrer";

  const nome = item.nome ?? "";
  const persona = item.persona ?? "";

  link.textContent = `${nome} - ${persona}`;

  return link;
}

/* =============================================
   3. POPOLAMENTO DATI VENDITE
   ============================================= */

if (venditeContainer && typeof vendite !== "undefined") {
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
      
      const link = creaLink(item);
      card.appendChild(link);
       
      div.appendChild(card);
    });

    venditeContainer.appendChild(div);

    // Creazione link nel dropdown
    if (dropdown) {
      const linkMenu = document.createElement("a");
       
      linkMenu.textContent = piattaforma;
      linkMenu.href = "#" + id;
      
      linkMenu.addEventListener("click", (e) => {
        e.preventDefault();
        
        // 1. Chiude i menu
        if (navbar) navbar.classList.remove("active");
        if (venditeMenu) venditeMenu.classList.remove("open");

        // 2. Scroll fluido
         const target = document.getElementById(id);
         if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
      });

      dropdown.appendChild(linkMenu);
    }
  }
}

/* =============================================
   4. POPOLAMENTO DATI ACQUISTI
   ============================================= */

if (acquistiContainer && typeof acquisti !== "undefined") {
  acquisti.forEach(item => {
    const card = document.createElement("div");
    card.classList.add("card");
    
     const link = creaLink(item);
    card.appendChild(link);

    acquistiContainer.appendChild(card);
  });
}
