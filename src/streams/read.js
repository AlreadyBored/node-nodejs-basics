import { createReadStream } from 'node:fs';

const read = async () => {
  const stream = createReadStream('src/streams/files/fileToRead.txt');
  stream.on('data', (chunk) => {
    process.stdout.write(chunk);
  });

  stream.on('end', () => {
    console.log('\nFile reading completed.');
  });

  stream.on('error', (err) => {
    console.error('Error reading the file:', err);
  });  
};

await read();