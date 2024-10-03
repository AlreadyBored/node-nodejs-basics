import { getFilesFolderPath } from "../utils.js";
import { createReadStream } from 'fs';

const read = async () => {
   const fileName = 'fileToRead.txt';
   const filePath = `${getFilesFolderPath('streams')}/${fileName}`;

   const readStream = createReadStream(filePath);

   readStream.on('end', () => {
    process.stdout.write('\n');
   });
 
   readStream.pipe(process.stdout);
};

await read();