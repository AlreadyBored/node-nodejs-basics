import fs from 'fs';

const transform = async () => {
  process.stdin.on('data', data => {
    process.stdout.write(data.toString().split('').reverse().join(''));
    process.exit();
  });
};

await transform();