const request = require('request');

module.exports = function(url) {
  request(url, function(err, resp, body) {
    if (err) throw err;
    else {
      process.stdout.write(body);
    }
  });
};
