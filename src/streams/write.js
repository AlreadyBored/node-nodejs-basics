import fs from 'fs';
import path from 'path';

const write = async () => {
  const filePath = path.join(
    path.dirname(new URL(import.meta.url).pathname),
    'files',
    'fileToWrite.txt'
  );
  const writableStream = fs.createWriteStream(filePath);

  process.stdin.pipe(writableStream);

  writableStream.on('finish', () =>
    console.log(`Data has been written to ${filePath}`)
  );

  writableStream.on('error', (error) =>
    console.error(`Error writing to file: ${error}`)
  );
};

await write();
