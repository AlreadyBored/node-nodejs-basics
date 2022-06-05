const parseEnv = () => {
  const fs = require('fs');
  const path = require('path');
  const { stdin, stdout } = require('process');

  stdout.write('Write something in the format RSS_name1=value1\n');

  stdin.addListener('data', (data) => {
    let example = data.toString().split('_');
    let value1 = example[1];

    if (data.toString().trim() == 'exit') {
      console.log('Bye!');
      process.exit();
    }

    console.log(`you wrote`);
    console.log(`RSS_${value1}`);
  });

  process.addListener('SIGINT', function () {
    console.log('Bye!');
    process.exit();
  });
};
parseEnv();

