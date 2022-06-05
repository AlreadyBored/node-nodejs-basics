import fs from 'fs';
import * as url from 'url';
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

export const write = async () => {
  const inputPath = `${__dirname}/files/fileToWrite.txt`;
  const writableStream = fs.createWriteStream(inputPath, { encoding: 'utf8' });

  writableStream.on('open', () => {
    writableStream.write(JSON.stringify(process.stdin));
  });
};

write();
