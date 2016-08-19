var moment = require('moment');

console.log(moment().format());

var now = moment();

console.log('Current timestamp', now.unix())

var timestamp = 1471596058;
var currentMoment = moment.unix(timestamp);
console.log('Current moment', currentMoment.format('Do MMMM YYYY @ h:mm a'));
