/ /script.js
const destinations = [
  { name: "Maasai Mara", region: "Rift Valley" },
  { name: "Diani Beach", region: "Coast" },
  { name: "Mount Kenya", region: "Central" },
];

function displayDestinations() {
  const list = document.getElementById("destination-list");
  if (!list) return;
  list.innerHTML = "";
  destinations.forEach((dest) => {
    const li = document.createElement("li");
    li.textContent = `${dest.name} - ${dest.region}`;
    list.appendChild(li);
  });
}
