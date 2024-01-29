const fs = require('fs');

const write = async () => {
  const writeStream = fs.createWriteStream(filePath);

  process.stdin.setEncoding('utf-8');

  process.stdin.on('data', (chunk) => {
    writeStream.write(chunk);
  });

  process.stdin.on('end', () => {
    writeStream.end();
    console.log(`Input from stdin written to ${filePath}`);
  });

  process.stdin.on('error', (error) => {
    console.error(`Error reading from stdin: ${error.message}`);
  });

  writeStream.on('error', (error) => {
    console.error(`Error writing to file: ${error.message}`);
  });
};

const filePath = 'fileToWrite.txt';

await write(filePath);