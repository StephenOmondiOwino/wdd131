function displayTemples(templeList) {
  const container = document.getElementById("temple-cards");
  container.innerHTML = ""; // Clear previous cards

  templeList.forEach(temple => {
    const card = document.createElement("section");

    const h3 = document.createElement("h3");
    h3.textContent = temple.templeName;

    const location = document.createElement("p");
    location.textContent = `Location: ${temple.location}`;

    const dedicated = document.createElement("p");
    dedicated.textContent = `Dedicated: ${temple.dedicated}`;

    const area = document.createElement("p");
    area.textContent = `Area: ${temple.area.toLocaleString()} sq ft`;

    const img = document.createElement("img");
    img.src = temple.imageUrl;
    img.alt = `Image of ${temple.templeName}`;
    img.loading = "lazy";

    card.appendChild(h3);
    card.appendChild(location);
    card.appendChild(dedicated);
    card.appendChild(area);
    card.appendChild(img);

    container.appendChild(card);
  });
}

displayTemples(temples); // Initial display

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  // ... include the rest from the instructions ...
  // Add 3 more temples with correct structure:
  {
    templeName: "Nairobi Kenya",
    location: "Nairobi, Kenya",
    dedicated: "2024, April, 1",
    area: 15000,
    imageUrl: "https://example.com/nairobi-temple.jpg"
  },
  {
    templeName: "Johannesburg South Africa",
    location: "Johannesburg, South Africa",
    dedicated: "1985, August, 24",
    area: 17000,
    imageUrl: "https://example.com/johannesburg-temple.jpg"
  },
  {
    templeName: "Accra Ghana",
    location: "Accra, Ghana",
    dedicated: "2004, January, 11",
    area: 17000,
    imageUrl: "https://example.com/accra-temple.jpg"
  }
];
