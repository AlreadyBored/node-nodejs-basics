const fs = require('fs');

const read = async () => {
  const readStream = fs.createReadStream(filePath, { encoding: 'utf-8' });

  readStream.on('data', (chunk) => {
    process.stdout.write(chunk);
  });

  readStream.on('end', () => {
    console.log('\nFile reading complete.');
  });

  readStream.on('error', (error) => {
    console.error(`Error reading file: ${error.message}`);
  });
};

const filePath = 'fileToRead.txt';

await read(filePath);