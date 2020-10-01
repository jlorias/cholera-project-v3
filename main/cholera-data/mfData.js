const naples = require('./NaplesData.json');
const uk = require('./UKData.json');

//instantiate variables
let naplesAgeRange = [], femaleNaplesDeaths = [], maleNaplesDeaths = [];
let ukAgeRange = [], femaleUkDeaths = [], maleUkDeaths = [];

for (let i = 0; i < naples.length; i++) {
  naplesAgeRange.push(naples[i]['age']);
  femaleNaplesDeaths.push(parseInt(naples[i]['female']));
  maleNaplesDeaths.push(parseInt(naples[i]['male']));
}
for (let i = 0; i < uk.length; i++) {
  ukAgeRange.push(uk[i]['age']);
  femaleUkDeaths.push(parseInt(uk[i]['female']));
  maleUkDeaths.push(parseInt(uk[i]['male']));
}

const totalFemalesUK = femaleUkDeaths.reduce((a, b) => { return a + b }, 0);
const totalMalesUk = maleUkDeaths.reduce((a, b) => { return a + b }, 0);

export {
  naplesAgeRange,
  ukAgeRange,
  femaleNaplesDeaths,
  maleNaplesDeaths,
  femaleUkDeaths,
  maleUkDeaths,
  totalFemalesUK,
  totalMalesUk
}