let driverInfo = '';

driverData.sort(
  (driver1, driver2) => (driver1.points < driver2.points) ? 1 : (driver1.points > driver2.points) ? -1 : 0
);

driverData.forEach((driver) =>{
  driverInfo += `
<div class="driver-profile">
  <div class="pfp-container">
    <img class="profile-picture" src="${driver.headshot}">
    <div class="flag-absolute">
      <img class="driver-flag"  src="${driver.countryFlag}">
    </div>
    <div class="driver-points">${driver.points} pts</div>
  </div>
  <div class="driver-info">
    <div class="driver-name">${driver.name}</div>
    <div class="driver-team">${driver.team}</div>
  </div>
</div>`
})

document.querySelector('.js-driver-grid')
  .innerHTML = driverInfo;