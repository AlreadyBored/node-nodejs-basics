import fs from 'fs';
import { pipeline } from 'stream';

const read = async () => {
    const filePath = 'files/fileToWrite.txt';
    const writableStream = fs.createWriteStream(filePath);
    pipeline(process.stdin, writableStream, (error) => {
      if (error) {
        console.error(`Error writing to file: ${error.message}`);
      } else {
        console.log('File writing completed.');
      }
    });
};

await read();