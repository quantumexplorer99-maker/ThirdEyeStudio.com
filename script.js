/* ===================== */
/* Business Card Collections (work1.html) */
/* ===================== */

function openCollection(id) {
  document.getElementById(id).style.display = "block";
}

function closeModal(id) {
  document.getElementById(id).style.display = "none";
}


// Close modal when clicking outside
window.onclick = function(event) {
  const modals = document.querySelectorAll(".modal");
  modals.forEach(modal => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
};

//================
//agenda collections work2.html 
//=======================

// Data for agendas
const agendas = {
  bureau: {
    name: "Bureau Agenda",
    images: [
      "images/work2/collection1/logob.png",
      "images/work2/collection1/calb.png",
      "images/work2/collection1/mainb.png",
      "images/work2/collection1/endb.png" // ✅ add more here if you want
    ]
  },
  journalier: {
    name: "Journalier Agenda",
    images: [
      "images/work2/collection2/logoj.png",
      "images/work2/collection2/calj.png",
      "images/work2/collection2/mainj.png",
      "images/work2/collection2/endj.png"
    ]
  },
  planning: {
    name: "Planning Agenda",
    images: [
      "images/work2/collection3/logop.png",
      "images/work2/collection3/calp.png",
      "images/work2/collection3/mainp.png",
      "images/work2/collection3/endp.png"
    ]
  },
  poche: {
    name: "Poche Agenda",
    images: [
      "images/work2/collection4/logopo.png",
      "images/work2/collection4/mainpo.png"
    ]
  }
};

// Display agenda details
function showAgenda(agendaKey) {
  const agenda = agendas[agendaKey];
  const agendaDisplay = document.getElementById("agenda-display");

  // Clear the display box
  agendaDisplay.innerHTML = `<h2>${agenda.name}</h2>`;

  // Loop through all images dynamically
  agenda.images.forEach((img, index) => {
    const imageElement = document.createElement("img");
    imageElement.src = img;
    imageElement.alt = `${agenda.name} Image ${index + 1}`;
    agendaDisplay.appendChild(imageElement);
  });
}


//On Phone, the links hide inside a dropdown, and a hamburger (☰) button appears. Clicking it opens/closes the menu
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

