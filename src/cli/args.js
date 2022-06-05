const parseArgs = () => {
  const fs = require('fs');
  const path = require('path');
  const { stdin, stdout } = require('process');

  stdout.write(
    'Write something in the format --propName value --prop2Name value2'
  );

  stdin.addListener('data', (data) => {
    let example = data.toString().split('--');

    let value1 = example[1];
    let value2 = example[2];

    if (data.toString().trim() == 'exit') {
      console.log('Bye!');
      process.exit();
    }

    console.log(`you wrote`);
    console.log(`${value1} ${value2}`);
  });

  process.addListener('SIGINT', function () {
    console.log('Bye!');
    process.exit();
  });
};

parseArgs();

