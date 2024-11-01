const quotes = [
    "MOD2",
    "C2-44",
    "CB6",
    "A1-A1",
     "A1-A2",
      "A1-A3",
       "A1-A4",
  "A2-A1",
   "A2-A2",
    "A2-A3",
     "A2-A4",
  "A3-A1",
   "A3-A2", "A3-A3", "A3-A4",
  "A4-A1", "A4-A2", "A4-A3", "A4-A4",
  "B1-A1", "B2-A2", "B3-A12", "B2-A17",
  "B8-BB12", "BSS-12", "BIS-28", "BSI17",
  "BS-6", "8B1", "9K2", "K45", "7A9",
  "5V3", "2V2", "1V1", "1-BR", "BR-FRT",
  "FRTN", "MIN-CR4FT", "DO-PA", "DVF",
  "DV-D", "DAS-78", "HB-41", "AL-70",
  "R2-DO", "E2-S", "R2-D1", "R2-D3",
  "L2-R2", "L2RD", "AP9", "APS8", "FH7",
  "ANB8", "Z67N", "AS87", "S-A9", "A0-171",
  "ASZ-24", "3EFD", "XR-D28", "DOMA-23", "P1-DTZ", "D2-B2", "BA-BA", "D67A", "NJ-DAO", "08-D9", "19DBB", "BB-9", "P0I", "IK-17", "IK-12", "IK-25",
  "BGT-777", "DAS-12", "90A", "R4-S2", "H316", "CH-WM", "LB-MB", "CML-1", "CML-2", "X-213", "0928-Z", "ZX3", "TN8", "10-NUT", "4-WAT", "F-ART", "FRTN-2",
  "NRJ12", "TP-23", "M6-W9", "TF1-11", "BRB-32", "N0-N0", "AS-53", "TRT-4", "IO-81", "CG-27", "CH-90", "SI-10", "AO-20", "OK-736", "84N-EV3R", "4EV3R", "SIA-4034",
  "NF-93", "SI9", "FAS-Z9"
];

const quoteElement = document.getElementById('quote');
const bouton = document.getElementById('bouton');
const historiqueElement = document.getElementById('historique'); // Sélectionne l'élément historique


const historique = [];

function changeQuote () {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const newQuote = quotes[randomIndex];

    quoteElement.textContent = newQuote;
    historique.push(newQuote);
    updateHistorique();

    
}

function updateHistorique() {
    // Efface l'historique précédent dans le HTML
    historiqueElement.innerHTML = '';

    // Crée une nouvelle liste à partir du tableau 'historique'
    historique.forEach(quote => {
        const listItem = document.createElement('li'); // Crée un nouvel élément <li>
        listItem.textContent = quote; // Ajoute la citation comme texte du <li>
        historiqueElement.appendChild(listItem); // Ajoute l'élément à la liste
    });
}

bouton.addEventListener('click', changeQuote);