let newStandings = "";
let newPosition = 1;
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