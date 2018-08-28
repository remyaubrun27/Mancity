var argv = require('minimist')(process.argv.slice(2));
var request = require('request');

/* node ./scrapeMancityUpdateFirebase.js -x 3 -y 4 -n5 -abc --beep=boop foo bar b */

/* node ./scrapeMancityUpdateFirebase.js -v -- /html/body/div[1]/div[4]/div/div/section[2]/ul/li[*]/a/div[2]/div/h3  https://www.mancity.com/teams/first-team 

section[2] Keepers

section[3] Defence

section[4] Midfield

.
.
.

*/

var xpath = argv._[0];
var url = argv._[1];

request
  .get(url)
  .on('response', function(response) {
    console.log(response.statusCode) // 200
    console.log(response.headers['content-type']) // 'image/png'
  })

console.dir(argv)
