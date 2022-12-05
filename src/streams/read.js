import fs from 'node:fs'

const read = async () => {
  const input = fs.createReadStream('./files/fileToRead.txt');

  input.on('data', (chunk)=>chunk.toString('utf-8'))
    .pipe(process.stdout)
};

await read();