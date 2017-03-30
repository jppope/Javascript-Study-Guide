var tourney = [
	{ "team": "Kansas", "wins": 3, "region": ""},
	{ "team": "Duke", "wins": 0, "region": ""},
	{ "team": "UCLA", "wins": 2, "region": ""},
	{ "team": "North Carolina", "wins": 0, "region": ""},
	{ "team": "Kentucky", "wins": 1, "region": ""},
	{ "team": "West Virginia", "wins": 1, "region": ""},
	{ "team": "Texas", "wins": 0, "region": ""},
	{ "team": "Gonzaga", "wins": 0, "region": ""},
]

function elite8(team){
	return team.wins >= 0;
}

function finalFour(team){
	return team.wins > 0;
}

function championship(team){
	return team.wins > 1;
}

var regionalFinal = tourney.filter(elite8);
var semiFinal = tourney.filter(finalFour);
var champAndRunnerUp = tourney.filter(championship);
console.log(regionalFinal);
console.log(semiFinal);
console.log(champAndRunnerUp);