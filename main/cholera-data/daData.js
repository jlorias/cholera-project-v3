const file = require('./DeathAttackData.json');

let dates = [], deaths = [], attacks = [];
let totalAttacks = [], totalDeaths =[];

for (let i = 0; i < file.length; i++) {
  dates.push(file[i]['Date']);
  deaths.push(parseInt(file[i]['Death']));
  attacks.push(parseInt(file[i]['Attack']));
}

attacks.reduce((prev, curr, i) => { return totalAttacks[i] = prev + curr }, 0);
deaths.reduce((prev, curr, i) => { return totalDeaths[i] = prev + curr }, 0);

export {
  attacks,
  dates,
  deaths,
  totalAttacks,
  totalDeaths
}