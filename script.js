function saveEntry() {
  const mood = document.getElementById("mood").value;
  const entry = document.getElementById("entry").value.trim();
  const date = new Date().toLocaleDateString();

  if (entry === "") {
    alert("Please write something in your reflection.");
    return;
  }

  const newEntry = {
    date,
    mood,
    entry
  };

  let entries = JSON.parse(localStorage.getItem("entries")) || [];
  entries.push(newEntry);
  localStorage.setItem("entries", JSON.stringify(entries));

  document.getElementById("entry").value = "";
  displayEntries();
}

function displayEntries() {
  const entries = JSON.parse(localStorage.getItem("entries")) || [];
  const entriesDiv = document.getElementById("entries");

  entriesDiv.innerHTML = "";
  entries.slice().reverse().forEach(e => {
    const div = document.createElement("div");
    div.className = "entry";
    div.innerHTML = `<strong>${e.date} - ${e.mood}</strong><p>${e.entry}</p>`;
    entriesDiv.appendChild(div);
  });
}

window.onload = displayEntries;
