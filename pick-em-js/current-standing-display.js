driverData.sort(
  (driver1, driver2) => (driver1.points < driver2.points) ? 1 : (driver1.points > driver2.points) ? -1 : 0
);

let currPosition = 1;
let currStandings = '';
let raceIndex = 0;

function createDriverList() {


  driverData.forEach((driver) => {
    currStandings += `
      <div class="driver-flex js-driver-flex">
        <div class="driver-position">${currPosition}.</div>
        <div class="name js-name">${driver.name}</div>
        <div class="pick-em-points">${driver.points} pts</div>
      </div>
    `
    currPosition++;
  });

  document.querySelector('.js-pick-drivers')
    .innerHTML = currStandings;

  // when user clicks on a driver, the driver will be placed into the next open space in the race results
  document.querySelectorAll('.js-name')
    .forEach((selectedDriver) => {
      selectedDriver.addEventListener('click', () => {
        document.querySelector(`.js-race-driver-name${raceIndex}`)
          .innerHTML = selectedDriver.innerHTML;
          raceIndex++;
    });
  });

  // when user clicks on a driver change the text and background color to inditcate driver has been selected
  document.querySelectorAll('.js-name')
    .forEach((selectedDriver) => {
      selectedDriver.addEventListener('click', () => {
        selectedDriver.classList.add('driver-selected');
      });
    });
  }

createDriverList();


