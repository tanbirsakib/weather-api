const showClub = () => {
    const input = document.getElementById('search-field');
    const inputText = input.value;
    console.log(inputText);
    const url = `https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${inputText}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayClub(data.teams));
}

const displayClub = (teams) => {
    teams.forEach(team => {
        console.log(team)
        const teamsDiv = document.getElementById('teams');
        const div = document.createElement('div');
        div.innerHTML = `
                        <img class="w-2/3" src=${team.strTeamLogo}>`
                        teamsDiv.appendChild(div)
    } )
}