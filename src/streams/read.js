import fs from 'fs';
import * as url from 'url';
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

export const read = async () => {
  const inputPath = `${__dirname}/files/fileToRead.txt`;
  const readStream = fs.createReadStream(inputPath, { encoding: 'utf8' });

  readStream.on('data', (chunk) => {
    process.stdout.write(chunk);
  });
};
