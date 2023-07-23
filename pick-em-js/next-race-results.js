let raceTemplate = '';

let currIndex = 0;

// create html for when the user clicks on drivers to display for next race results
// uses the list of positions to display position and points from that position
// when user clicks on driver from current standings that driver's name is added to next object
function displayRace() {
  raceResult.forEach((place) => {
    raceTemplate += `
      <div class="race-flex">
        <div class="next-race-position">${place.position}.</div>
        <div class="race-driver-name js-race-driver-name${currIndex}">${place.name}</div>
        <div class="points-from-race">+${place.points} pts</div>
      </div>
    `
    currIndex++;
  });
  
}

displayRace();

document.querySelector('.js-next-race')
  .innerHTML = raceTemplate;
