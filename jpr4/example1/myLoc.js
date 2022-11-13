document.addEventListener("DOMContentLoaded", getMyLocation);

let watchId = null;

function getMyLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(displayLocation, displayError);
    let watchButton = document.getElementById("watch");
    watchButton.addEventListener("click", watchLocation);
    let clearWatchButton = document.getElementById("clearWatch");
    clearWatchButton.addEventListener("click", clearWatch);
  } else alert("Oops, no geolocation support");
}

const collegeCoord = {
  latitude: 48.939974,
  longitude: 24.737771,
};

function displayLocation(position) {
  let latitude = position.coords.latitude;

  let longitude = position.coords.longitude;

  let div = document.getElementById("location");
  div.innerHTML = `You are at Latiude: ${latitude} and Longitude ${longitude}`;
  div.innerHTML += `(with  ${position.coords.accuracy} meters accuracy)`;
  let km = computeDistance(position.coords, collegeCoord);

  let distance = document.getElementById("distance");
  distance.innerHTML = `You are ${km} km from the College`;

  // map.setView([latitude, longitude], 13);
}

function displayError(error) {
  const errorTypes = {
    0: "Unknow error",
    1: "Permission denided by user",
    2: "Position is not available",
    3: "Request timed out",
  };

  const errorMessage = errorTypes[error.code];

  if (error.code == 0 || error.code == 20) {
    errorMessage = errorMessage + " " + errorMessage;
  }
  let div = document.getElementById("location");
  div.innerHTML = errorMessage;
}

function computeDistance(startCoords, destinationCoords) {
  let startLatRads = degreesToRadians(startCoords.latitude);

  let startLongRads = degreesToRadians(startCoords.longitude);

  let destLatRads = degreesToRadians(destinationCoords.latitude);
  let destLongRads = degreesToRadians(destinationCoords.longitude);

  let Radius = 6371;

  let distance =
    Math.acos(
      Math.sin(startLatRads) * Math.sin(destLatRads) +
        Math.cos(startLatRads) *
          Math.cos(destLatRads) *
          Math.cos(startLongRads - destLongRads)
    ) * Radius;

  return distance;
}

function degreesToRadians(degrees) {
  let radians = (degrees * Math.PI) / 180;
  return radians;
}

function watchLocation() {
  watchId = navigator.geolocation.watchPosition(displayLocation, displayError);
}

function clearWatch() {
  if (watchId) {
    navigator.geolocation.clearWatch(watchId);
    watchId = null;
  }
}
