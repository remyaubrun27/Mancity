var argv = require('minimist')(process.argv.slice(2));

/* node ./scrapeMancityUpdateFirebase.js -x 3 -y 4 -n5 -abc --beep=boop foo bar b */

/* node ./scrapeMancityUpdateFirebase.js -v /html/body/div[1]/div[4]/div/div/section[4]/ul/li[5]/a/div[2]/div/h3  https://www.mancity.com/teams/first-team 

section[2] Keepers

section[3] Defence

section[4] Midfield

.
.
.

*/

console.dir(argv)
