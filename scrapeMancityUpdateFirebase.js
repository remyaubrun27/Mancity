var argv = require('minimist')(process.argv.slice(2));
var request = require('request');
var cheerio = require('cheerio');

/* node ./scrapeMancityUpdateFirebase.js -x 3 -y 4 -n5 -abc --beep=boop foo bar b */

/* node ./scrapeMancityUpdateFirebase.js -v -- /html/body/div[1]/div[4]/div/div/section[2]/ul/li[*]/a/div[2]/div/h3  https://www.mancity.com/teams/first-team 
 *
 *
 * /html/body/div[1]/div[4]/div/div/section[2]/ul/li[4]/a/div[2]/div/h3

section[2] Keepers

section[3] Defence

section[4] Midfield

.
.
.

*/

var xpath = argv._[0];
var url = argv._[1];
var verbose = argv.v;

request(url, function(err, res, body) {
  if(verbose){
    console.log("Got " + res.statusCode + " status");
    console.log("Got " + body.length + " bytes");
  }
  const $ = cheerio.load(body);
  var squadListings = $(".squad-listing--person-name");
  for(listing in squadListings) {
    console.log(squadListings[listing].children[0].data);
  }
  /* debugger;*/
})
