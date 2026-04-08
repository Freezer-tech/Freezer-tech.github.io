const venditeContainer = document.getElementById("vendite-container");
const acquistiContainer = document.getElementById("acquisti-container");
const dropdown = document.getElementById("dropdown-vendite");
const venditeMenu = document.querySelector(".dropdown");

/* =============================================
   GESTIONE APERTURA/CHIUSURA DROPDOWN
   ============================================= */

venditeMenu.addEventListener("click", (e) => {
  // Se clicco sul link "Vendite" (che ha classe dropbtn)
  if (e.target.classList.contains("dropbtn")) {
    // e.preventDefault(); // Opzionale: decommenta se NON vuoi che la pagina salti alla sezione vendite al primo click
    venditeMenu.classList.toggle("open");
    e.stopPropagation(); 
  }
});

// CHIUSURA AUTOMATICA: Se clicco fuori dal menu
window.addEventListener("click", () => {
  venditeMenu.classList.remove("open");
});

// CHIUSURA DOPO CLICK SU UN LINK DEL MENU (le piattaforme)
dropdown.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    venditeMenu.classList.remove("open");
  }
});


/* =========================
   VENDITE + ID piattaforme
========================= */
for (let piattaforma in vendite) {
  const div = document.createElement("div");
  div.classList.add("platform");

  // ID per scroll (IMPORTANTE)
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

  /* =========================
     CREAZIONE DROPDOWN
  ========================= */
  const link = document.createElement("a");
  link.textContent = piattaforma;
  link.href = "#" + id;

  link.addEventListener("click", (e) => {
    e.preventDefault();

    document.getElementById(id).scrollIntoView({
      behavior: "smooth"
    });
  });

  dropdown.appendChild(link);
}

/* =========================
   ACQUISTI
========================= */
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
