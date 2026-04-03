function renderCard(item, container) {
  const card = document.createElement("div");
  card.classList.add("card");

  const content = item.link
    ? `<a href="${item.link}" target="_blank">${item.nome} - ${item.persona}</a>`
    : `${item.nome} - ${item.persona}`;

  card.innerHTML = content;
  container.appendChild(card);
}

for (let piattaforma in vendite) {
  const div = document.createElement("div");
  div.classList.add("platform");

  const title = document.createElement("h3");
  title.textContent = piattaforma;
  div.appendChild(title);

  vendite[piattaforma].forEach(item => {
    renderCard(item, div);
  });

  venditeContainer.appendChild(div);
}

acquisti.forEach(item => {
  renderCard(item, acquistiContainer);
});
