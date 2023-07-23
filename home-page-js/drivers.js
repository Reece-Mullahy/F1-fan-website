let driverInfo = '';

// sort the drivers to display their current standing in order
driverData.sort(
  (driver1, driver2) => (driver1.points < driver2.points) ? 1 : (driver1.points > driver2.points) ? -1 : 0
);

let homePagePosition = 1;

// add each driver's flexbox to the grid
driverData.forEach((driver) =>{
  driverInfo += `
<div class="driver-profile">
  <div class="home-page-position">${homePagePosition}</div>
  <div class="driver-name">${driver.name}</div>
  <div class="driver-team">${driver.team}</div>
  <div class="driver-points">${driver.points} pts</div>
</div>`

homePagePosition++;
})
// display the html
document.querySelector('.js-driver-grid')
  .innerHTML = driverInfo;