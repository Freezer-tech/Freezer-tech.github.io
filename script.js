const venditeContainer = document.getElementById("vendite-container");
const acquistiContainer = document.getElementById("acquisti-container");

/* =======================
   VENDITE
======================= */
for (let piattaforma in vendite) {
  const div = document.createElement("div");
  div.classList.add("platform");

  const title = document.createElement("h3");
  title.textContent = piattaforma;

  div.appendChild(title);

  vendite[piattaforma].forEach(item => {
    const card = document.createElement("div");
    card.classList.add("card");

    const text =
      (item.nome && item.nome.trim() !== "")
        ? item.nome
        : (item.persona || "Senza nome");

    const link = item.link || "#";

    const a = document.createElement("a");
    a.href = link;
    a.target = "_blank";
    a.title = link;

    a.textContent = `${text} - ${item.persona}`;

    card.appendChild(a);
    div.appendChild(card);
  });

  venditeContainer.appendChild(div);
}

/* =======================
   ACQUISTI
======================= */
acquisti.forEach(item => {
  const card = document.createElement("div");
  card.classList.add("card");

  const text =
    (item.nome && item.nome.trim() !== "")
      ? item.nome
      : (item.persona || "Senza nome");

  const link = item.link || "#";

  const a = document.createElement("a");
  a.href = link;
  a.target = "_blank";
  a.title = link;
  a.textContent = `${text} - ${item.persona}`;

  card.appendChild(a);
  acquistiContainer.appendChild(card);
});
