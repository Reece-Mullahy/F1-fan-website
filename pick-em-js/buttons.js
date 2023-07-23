let newStandings = "";
let newPosition = 1;

// pressing the clear button will remove all names from the results for next race
// all drivers that have been clicked will return to original css display
// reset list that contains updated standings to be empty
document.querySelector('.js-clear-button')
  .addEventListener('click', () => {
    for (let j = 0; j < 20; j++) {
      document.querySelector(`.js-race-driver-name${j}`)
        .innerHTML = "";
    }

    i = 0;

    document.querySelectorAll('.js-driver-flex')
      .forEach((driverFlex) => {
        if (driverFlex.classList.contains('driver-selected')) {
          driverFlex.classList.remove('driver-selected');
        }
      })

    userPicks = [];

    newStandings = "";
    document.querySelector('.js-updated-standings')
      .innerHTML = newStandings;

    newPosition = 1;
  });

// when clicking "generate" button only create the next display of updated standings if all drivers are selected
// sort drivers with new points because standings could've changed
// calculated how many places a driver moved and create display based on negative or positive movement
// create new html for the new standings and display the new standings on the screen
document.querySelector('.js-generate-button')
  .addEventListener('click', () => {
    if (userPicks.length == 20) {
      userPicks.sort((driver1, driver2) => (driver1.points < driver2.points) ? 1 : (driver1.points > driver2.points) ? -1 : 0
      );
      console.log(userPicks);
      userPicks.forEach((pick) => {
        let positionDiff = pick.position - newPosition;
        let changeSign = "";
        let changeStyle = "no-change"

        if (positionDiff > 0) {
          changeSign = "↑";
          changeStyle = "positive-change"
        }
        else if (positionDiff < 0) {
          positionDiff *= -1;
          changeSign = "↓";
          changeStyle = "negative-change"
        }
        else {
          positionDiff = "";
        }

        newStandings += `
          <div class="new-standings-flex"
          data-driver-change="${positionDiff}">
            <div class="new-position">${newPosition}.</div>
            <div class="new-name">${pick.name}</div>
            <div class="new-points">${pick.points} pts</div>
          </div>
          <div class=${changeStyle}>${changeSign}${positionDiff}</div>
        `;
        newPosition++;
      })
        
      document.querySelector('.js-updated-standings')
        .innerHTML = newStandings;
    }
  });


  // set a boolean to determine when user can start selecting drivers
  // only let user use this page once the user has pressed continue after reading directions
  let canContinue = false;

  document.querySelector('.js-continue')
    .addEventListener('click', () => {
      document.querySelector('.js-pick-em-directions').innerHTML = "";

      canContinue = true;
    })