import fs from 'fs';
import path from 'path';

const read = async () => {
  const filePath = path.join(
    path.dirname(new URL(import.meta.url).pathname),
    'files',
    'fileToRead.txt'
  );
  const readableStream = fs.createReadStream(filePath, 'utf8');

  readableStream.on('data', (dataChunk) => process.stdout.write(dataChunk));
  readableStream.on('error', (error) =>
    console.error(`Error reading the file: ${error}`)
  );
};

await read();
