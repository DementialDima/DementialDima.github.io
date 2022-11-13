document.addEventListener("DOMContentLoaded", getMyLocation);
let map = null;
let watchId = null;

const form = document.querySelector("form");
const currentPositionOutput = document.getElementById("watched");

form.addEventListener("submit", (e) => {
  e.preventDefault();
});

form.setCoordiantsOnMap.addEventListener("click", showPlaceOnMap);

document.getElementById("watch").addEventListener("click", (e) => {
  if (watchId == null) {
    map.remove();
    map = null;
  }
  watchId = navigator.geolocation.watchPosition(displayLocation);
});

document.getElementById("clearWatch").addEventListener("click", () => {
  if (watchId) {
    navigator.geolocation.clearWatch(watchId);
    watchId = null;
  }
});

function getMyLocation() {
  if (navigator.geolocation)
    navigator.geolocation.getCurrentPosition(displayLocation);
  else alert("Oops, no geolocation support");
}
function displayLocation(position) {
  let latitude = position.coords.latitude;

  let longitude = position.coords.longitude;

  currentPositionOutput.innerHTML = `You are at Latiude: ${latitude} and Longitude ${longitude}`;

  if (map == null) {
    map = L.map("map").setView([latitude, longitude], 13);
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);
    L.marker([latitude, longitude]).addTo(map);
  } else {
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);
    L.marker([latitude, longitude])
      .addTo(map)
      .bindPopup(
        `${new Date(
          position.timestamp
        ).toString()} <br /> Latiude: ${latitude} <br />Longitude ${longitude}`
      );
  }

  map.on("click", setTextToMarker);
}

function setTextToMarker(e) {
  let popup = L.popup();
  popup
    .setLatLng(e.latlng)
    .setContent(
      "You right now clicked, <br />Latitude: " +
        e.latlng.lat +
        "<br />Longitude: " +
        e.latlng.lng
    )
    .openOn(map);
}

function showPlaceOnMap(e) {
  let latitude = +form.elements["lat"].value;
  let longitude = +form.elements["longtud"].value;

  if (watchId) {
    navigator.geolocation.clearWatch(watchId);
    watchId = null;
  }

  map.remove();
  map = null;

  const coords = {
    latitude,
    longitude,
  };

  displayLocation({ coords });
}
