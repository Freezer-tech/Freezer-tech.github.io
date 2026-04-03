// Riferimenti ai contenitori principali
const venditeContainer = document.getElementById("vendite-container");
const acquistiContainer = document.getElementById("acquisti-container");

/**
 * Funzione di supporto per generare il DOM delle sezioni.
 * Uniformando la logica, possiamo usare una funzione per evitare ripetizioni.
 */
function generaSezioni(dati, contenitore) {
  for (let piattaforma in dati) {
    // Crea il wrapper per la piattaforma
    const divPiattaforma = document.createElement("div");
    divPiattaforma.classList.add("platform");

    // Crea e aggiungi il titolo (h3)
    const title = document.createElement("h3");
    title.textContent = piattaforma;
    divPiattaforma.appendChild(title);

    // Cicla gli elementi all'interno di quella piattaforma
    dati[piattaforma].forEach(item => {
      const card = document.createElement("div");
      card.classList.add("card");
      card.innerHTML = `
        <a href="${item.link}" target="_blank">
          ${item.nome} - ${item.persona}
        </a>
      `;
      divPiattaforma.appendChild(card);
    });

    // Aggiunge la piattaforma completa al contenitore principale
    contenitore.appendChild(divPiattaforma);
  }
}

// Esecuzione per le Vendite
generaSezioni(vendite, venditeContainer);

// Esecuzione per gli Acquisti (ora con la stessa logica!)
generaSezioni(acquisti, acquistiContainer);
