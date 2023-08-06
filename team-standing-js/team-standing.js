let teamInfo = '';

// sort teams points to accurately display their position
teamData.sort(
  (team1, team2) => (team1.points < team2.points) ? 1 : (team1.points > team2.points) ? -1 : 0
);

let teamPosition = 1;

// generate the html for each team and their position
teamData.forEach((team)=> {
  teamInfo += `
<div class="team-profile">
  <div class="team-position">${teamPosition}</div>
  <div class="team-name">${team.name}</div>
  <div class="team-points">${team.points} pts</div>
</div>
`
teamPosition++;
})

document.querySelector('.js-team-grid')
  .innerHTML = teamInfo;