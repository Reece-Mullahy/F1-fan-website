driverData.sort(
  (driver1, driver2) => (driver1.points < driver2.points) ? 1 : (driver1.points > driver2.points) ? -1 : 0
);

let currPosition = 1;
let currStandings = '';
let raceIndex = 0;

function createDriverList() {
  driverData.forEach((driver) => {
    currStandings += `
      <div class="driver-flex js-driver-flex"
      data-driver-name="${driver.name}"
      data-driver-points="${driver.points}"
      data-driver-position=${currPosition}>
        <div class="driver-position">${currPosition}.</div>
        <div class="name js-name">${driver.name}</div>
        <div class="pick-em-points">${driver.points} pts</div>
      </div>
    `;
    currPosition++;
  });

  // generate html within the .js-pick-drivers class
  document.querySelector('.js-pick-drivers')
    .innerHTML = currStandings;

  // when the user clicks on a driver box, the driver along with their new total points is pushed into a seperate list of objects
  // the driver clicked on also appears in the next open spot in the next race results
  // only allows for driver to be inserted into race results once
  let i = 0;
  document.querySelectorAll('.js-driver-flex')
    .forEach((currDriver) => {
      currDriver.addEventListener('click', () => {
        if (canContinue) {
          const driverName = currDriver.dataset.driverName;
          const driverPoints = currDriver.dataset.driverPoints;
          const driverPosition = currDriver.dataset.driverPosition;

          let contains;
          
          if (userPicks.length == 0) {
            userPicks.push({
              name: driverName,
              points: +driverPoints + +raceResult[i].points,
              position: driverPosition
            });  
            document.querySelector(`.js-race-driver-name${i}`)
                .innerHTML = driverName;
            i++;
          }
          else {
            userPicks.forEach((userEntry) => {
              if (driverName === userEntry.name) {
                contains = true;
              }
            })
          
            if (!contains) {
              userPicks.push({
                name: driverName,
                points: +driverPoints + +raceResult[i].points,
                position: driverPosition
              });
              document.querySelector(`.js-race-driver-name${i}`)
                .innerHTML = driverName;
              i++;
            }
          }
        }

        document.querySelector('.js-clear-button')
          .addEventListener('click', () => {
            i = 0;
          })
      });
    });
  
/*
  // when user clicks on a driver, the driver will be placed into the next open space in the race results
  document.querySelectorAll('.js-name')
    .forEach((selectedDriver) => {
      selectedDriver.addEventListener('click', () => {
        document.querySelector(`.js-race-driver-name${raceIndex}`)
          .innerHTML = selectedDriver.innerHTML;
          raceIndex++;
    });
    
  });
  */


  // when user clicks on a driver change the text and background color to inditcate driver has been selected
  document.querySelectorAll('.js-driver-flex')
    .forEach((selectedDriver) => {
      selectedDriver.addEventListener('click', () => {
        if (canContinue){
          selectedDriver.classList.add('driver-selected');
        }
      });
    });
  }

createDriverList();