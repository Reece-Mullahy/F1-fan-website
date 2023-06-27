let teamInfo = '';

teamData.sort(
  (team1, team2) => (team1.points < team2.points) ? 1 : (team1.points > team2.points) ? -1 : 0
);

teamData.forEach((team)=> {
  teamInfo += `
<div class="team-profile">
  <div class="team-picture-container">
    <img class="car-picture" src=${team.car}>
    <div class="team-flag-absolute">
      <img class="team-flag" src=${team.flag}>
    </div>
    <div class="team-points">${team.points} Pts</div>
  </div>
  <div class="team-info">
    <div class="team-name">${team.name}</div>
  </div>
</div>
  `
})

document.querySelector('.js-team-grid')
  .innerHTML = teamInfo;