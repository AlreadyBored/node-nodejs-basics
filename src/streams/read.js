import {createHash} from 'crypto';
import fs from 'fs';
import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const read = async () => {
  const filePath = path.resolve(__dirname, './files/fileToRead.txt');

  const data = await new Promise(resolve => {
    const stream = fs.createReadStream(filePath);
    let fileData = '';

    stream.on('readable', () => {
      let chunk;

      while (null !== (chunk = stream.read(1))) {
        fileData += chunk;
      }
    });

    stream.on('end', () => resolve(fileData));
  });


  process.stdout.write(data);
};

await read();
