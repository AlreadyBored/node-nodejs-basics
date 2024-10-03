import { pipeline } from "stream";
import { getFilesFolderPath } from "../utils.js";
import { createReadStream, createWriteStream } from 'fs';

const read = async () => {
   const fileName = 'fileToRead.txt';
   const filePath = `${getFilesFolderPath('streams')}/${fileName}`;

   const readStream = createReadStream(filePath);

   readStream.on('error', (error) => {
    console.error('Error reading the file:', error.message);
  });

   readStream.pipe(process.stdout);
};

await read();