const readlineSync = require('readline-sync')
function calculateMVP() {
    let n = readlineSync.questionInt("Enter the number of players: ");
    let players = [];

    for (let i = 0; i < n; i++) {
        let name = readlineSync.question(`Enter the name of player `);
        let runs = readlineSync.questionInt(`Enter the runs scored`);
        let wickets = readlineSync.questionInt(`Enter the wickets`);
        let catches = readlineSync.questionInt(`Enter the catches`);

        players.push({ name, runs, wickets, catches });
    }

    if (players.length === 0) {
        return null; // Return null if no players are entered
    }

    let mvp = players[0];
    let highestScore = mvp.runs + 25 * mvp.wickets + 10 * mvp.catches;
    for (let i = 1; i < players.length; i++) {
        let player = players[i];
        let score = player.runs + 25 * player.wickets + 10 * player.catches;

        if (score > highestScore) {
            mvp = player;
            highestScore = score;
        }
    }

    return mvp.name;
}

console.log(calculateMVP());
