// pull IP geodata

const ipEndpoint =
  "https://geo.ipify.org/api/v1?apiKey=at_jdQRUlqInO60YbkS1bSOpzsr4OC1t";
const userIp = document.querySelector(".ip");
const userLocation = document.querySelector(".location");
const userTimezone = document.querySelector(".time");
const userIsp = document.querySelector(".isp");
let mapLat, mapLong;

async function displayIPData() {
  const response = await fetch(ipEndpoint);
  const data = await response.json();
  console.log(data);
  userIp.textContent = data.ip;
  userLocation.textContent = `${data.location.city}, ${data.location.region}`;
  userTimezone.textContent = data.location.timezone;
  userIsp.textContent = data.isp;
  mapLat = data.location.lat;
  mapLong = data.location.lng;

  // map functions
  const ipMap = L.map("map-component").setView([mapLat, mapLong], 13);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
  }).addTo(ipMap);
}

function handleError(err) {
  console.log(err);
}

displayIPData().catch(handleError);
