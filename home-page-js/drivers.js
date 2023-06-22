let driverInfo = '';

driverData.forEach((driver) =>{
  driverInfo += `
<div class="driver-profile">
  <div class="pfp-container">
    <img class="profile-picture" src="${driver.headshot}">
    <div class="flag-absolute">
      <img class="driver-flag"  src="${driver.countryFlag}">
    </div>
  </div>
  <div class="driver-info">
    <div class="driver-name">${driver.name}</div>
    <div class="driver-team">${driver.team}</div>
  </div>
</div>`
})

document.querySelector('.js-driver-grid')
  .innerHTML = driverInfo;