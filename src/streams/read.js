import fs from 'fs';
import { stdout } from 'process';
const read = async () => {
    try {
        const readStream = fs.createReadStream('src/streams/files/fileToRead.txt', { encoding: 'utf-8' });
        for await (const chunk of readStream) {
            stdout.write(chunk);
        }
      } catch(error) {
        console.log(error);
      }
};

await read();