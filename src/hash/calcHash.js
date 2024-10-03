import { getFilesFolderPath } from "../utils.js";
import { pipeline } from 'node:stream/promises';
import { createReadStream } from 'node:fs';

const calculateHash = async () => {
  const fileName = 'fileToCalculateHashFor.txt';
  const filePath = `${getFilesFolderPath('hash')}/${fileName}`;
  const readStream = createReadStream(filePath);
  const { createHash } = await import('node:crypto');

  // await pipeline(
  //   readStream,
  //   createHash('SHA256').setEncoding('hex'),
  //   process.stdout
  // );

  // readStream.on('end', () => process.stdout.write('/n'));

  // readStream.pipe(process.stdout)

  readStream.on('end', () => {
    process.stdout.write('\n');
   });
 
   readStream.pipe(createHash('SHA256')).setEncoding('hex').pipe(process.stdout);
}   

await calculateHash();