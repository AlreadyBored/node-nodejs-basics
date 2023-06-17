import { createWriteStream } from 'node:fs';
import { pipeline } from 'node:stream';

const write = async () => {
  const writableStream = createWriteStream('src/streams/files/fileToWrite.txt');

  pipeline(
      process.stdin,
      writableStream,
      (err) => {
        console.log(err);
      }
    )
};

await write();
