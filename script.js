const venditeContainer = document.getElementById("vendite-container");
const acquistiContainer = document.getElementById("acquisti-container");
const dropdown = document.getElementById("dropdown-vendite");
const venditeMenu = document.querySelector(".dropdown");

/* =========================
   TOGGLE MENU (click)
========================= */
venditeMenu.addEventListener("click", (e) => {
  // evita che il click sui link richiuda subito
  if (e.target.tagName !== "A") {
    venditeMenu.classList.toggle("open");
  }
});

/* =========================
   VENDITE + DROPDOWN
========================= */
for (let piattaforma in vendite) {
  const div = document.createElement("div");
  div.classList.add("platform");

  // ID per scroll
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

  /* ===== LINK DROPDOWN ===== */
  const link = document.createElement("a");
  link.textContent = piattaforma;
  link.href = "#" + id;

  link.addEventListener("click", (e) => {
    e.preventDefault();

    document.getElementById(id).scrollIntoView({
      behavior: "smooth"
    });

    // 👇 chiude menu dopo click
    venditeMenu.classList.remove("open");
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
