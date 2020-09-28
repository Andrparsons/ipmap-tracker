// pull IP geodata

// const ipEndpoint =
//   "https://geo.ipify.org/api/v1?apiKey=at_jdQRUlqInO60YbkS1bSOpzsr4OC1t";
const userIp = document.querySelector(".ip");
const userLocation = document.querySelector(".location");
const userTimezone = document.querySelector(".time");
const userIsp = document.querySelector(".isp");

async function displayIPData() {
  const response = await fetch(ipEndpoint);
  const data = await response.json();
  console.log(data);
  userIp.textContent = data.ip;
  userLocation.textContent = `${data.location.city}, ${data.location.region}`;
  userTimezone.textContent = data.location.timezone;
  userIsp.textContent = data.isp;
}

function handleError(err) {
  console.log(err);
}

displayIPData().catch(handleError);
