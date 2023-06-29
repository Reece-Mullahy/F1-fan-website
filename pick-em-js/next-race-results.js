let raceTemplate = '';

let racePosition = 1;
let racePoints = 0;
let currIndex = 0;

function displayRace() {
  driverData.forEach((driver) => {
    raceTemplate += `
      <div class="race-flex">
        <div class="next-race-position">${racePosition}.</div>
        <div class="race-driver-name js-race-driver-name${currIndex}"></div>
        <div class="points-from-race">+${determinePoints(racePosition)}pts</div>
      </div>
    `
    racePosition++;
    currIndex++;
  });
}

displayRace();

document.querySelector('.js-next-race')
  .innerHTML = raceTemplate;

function determinePoints(racePosition) {
  if (racePosition === 1) {
    racePoints = 25;
  }
  else if (racePosition === 2) {
    racePoints = 18;
  }
  else if (racePosition === 3) {
    racePoints = 15;
  }
  else if (racePosition === 4) {
    racePoints = 12;
  }
  else if (racePosition === 5) {
    racePoints = 10;
  }
  else if (racePosition === 6) {
    racePoints = 8;
  }
  else if (racePosition === 7) {
    racePoints = 6;
  }
  else if (racePosition === 8) {
    racePoints = 4;
  }
  else if (racePosition === 9) {
    racePoints = 2;
  }
  else if (racePosition === 10) {
    racePoints = 1;
  }
  else {
    racePoints = 0;
  }

  return racePoints;
};