let raceTemplate = '';

let racePosition = 1;
let racePoints = 0;
let currIndex = 0;
let removeButton = 0;

function displayRace() {
  raceResult.forEach((place) => {
    raceTemplate += `
      <div class="race-flex">
        <div class="next-race-position">${place.position}.</div>
        <div class="race-driver-name js-race-driver-name${currIndex}">${place.name}</div>
        <div class="points-from-race">+${place.points}pts</div>
      </div>
    `
    currIndex++;
  });
  
}

displayRace();

document.querySelector('.js-next-race')
  .innerHTML = raceTemplate;
