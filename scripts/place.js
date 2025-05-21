// Footer Year and Last Modified
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;

// Windchill calculation
function calculateWindChill(t, s) {
  return Math.round(35.74 + 0.6215 * t - 35.75 * Math.pow(s, 0.16) + 0.4275 * t * Math.pow(s, 0.16));
}

const temp = parseFloat(document.getElementById('temperature').textContent);
const windSpeed = parseFloat(document.getElementById('wind-speed').textContent);

let windChill = "N/A";
if (temp <= 50 && windSpeed > 3) {
  windChill = calculateWindChill(temp, windSpeed) + " °F";
}
document.getElementById('windchill').textContent = windChill;
