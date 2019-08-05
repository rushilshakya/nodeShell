const pwd = require('./pwd.js');
const ls = require('./ls.js');
const cat = require('./cat.js');
const curl = require('./curl.js');

process.stdout.write('prompt > ');

process.stdin.on('data', data => {
  let cmd = data.toString().trim();
  cmd = cmd.split(' ');

  if (cmd[0] === 'pwd') {
    pwd();
  } else if (cmd[0] === 'ls') {
    ls();
  } else if (cmd[0] === 'cat' && cmd[1] !== undefined) {
    cat(cmd[1]);
  } else if (cmd[0] === 'curl' && cmd[1] !== undefined) {
    curl(cmd[1]);
  } else {
    process.stdout.write('You typed: ' + cmd);
  }
  process.stdout.write('\nprompt > ');
});
