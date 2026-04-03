const venditeContainer = document.getElementById("vendite-container");
const acquistiContainer = document.getElementById("acquisti-container");

/* VENDITE */
for (let piattaforma in vendite) {
  const div = document.createElement("div");
  div.classList.add("platform");

  const title = document.createElement("h3");
  title.textContent = piattaforma;

  div.appendChild(title);

  vendite[piattaforma].forEach(item => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <a href="${item.link}" target="_blank">
        ${item.nome} - ${item.persona}
      </a>
    `;

    div.appendChild(card);
  });

  venditeContainer.appendChild(div);
}

/* ACQUISTI */
acquisti.forEach(item => {
  const card = document.createElement("div");
  card.classList.add("card");

  card.textContent = `${item.nome} - ${item.persona}`;

  acquistiContainer.appendChild(card);
});
