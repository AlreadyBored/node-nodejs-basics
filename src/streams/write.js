import fs from 'fs';
import path from 'path';
import {fileURLToPath} from 'url';
import {pipeline} from 'stream';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const write = async () => {
  const filePath = path.resolve(__dirname, './files/fileToWrite.txt');
  const fileStream = fs.createWriteStream(filePath, {encoding: 'utf-8'});

  console.log('Write some text, push Enter after last symbol and terminate the process (Ctrl+C) — text will appear in file');

  pipeline(process.stdin, fileStream, (err) => {
      if (err) {
        console.error('Pipeline failed.', err);
      } else {
        console.log('Pipeline succeeded.');
      }
    }
  );
};

await write();
