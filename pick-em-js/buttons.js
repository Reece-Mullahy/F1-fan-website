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
  });

let newStandings = "";
let newPosition = 1;
document.querySelector('.js-generate-button')
  .addEventListener('click', () => {
    if (userPicks.length == 20) {
      console.log(userPicks);
      userPicks.forEach((pick) => {
        newStandings += `
          <div class="new-standings-flex">
            <div class="new-position">${newPosition}.</div>
            <div class="new-name">${pick.name}</div>
            <div class="new-points">${pick.points} pts</div>
          </div>
        `;
        newPosition++;
      })

      document.querySelector('.js-updated-standings')
        .innerHTML = newStandings;
    }
  });