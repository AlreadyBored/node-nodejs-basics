import { getFilesFolderPath } from "../utils.js";
import { createReadStream } from 'fs';
import { pipeline } from 'node:stream/promises';

const read = async () => {
   const fileName = 'fileToRead.txt';
   const filePath = `${getFilesFolderPath('streams')}/${fileName}`;

   const readStream = createReadStream(filePath);

   readStream.on('end', () => {
    process.stdout.write('\n');
   });
 
  await pipeline(
    readStream,
    process.stdout,
  );
};

await read();