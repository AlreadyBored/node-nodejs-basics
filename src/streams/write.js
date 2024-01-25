import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const write = async () => {
    // Write your code here 
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const writeFile = path.join(__dirname, 'files', 'fileToWrite.txt');

    const writeStream = fs.createWriteStream(writeFile);

    const cursor = () => process.stdout.write('Type here (.end for stop)> ');

    cursor();

    process.stdin.on('data', (chunk) => {
      const input = chunk.toString().trim();
      if (input === '.end') {
        writeStream.end();
      } else {
        writeStream.write(input);
        writeStream.write('\n');
        cursor();
      }
    })

    writeStream.on('finish', () => {
      console.log('File written');
      process.exit();
    })

    writeStream.on('error', (error) => {
      console.error(error.message);
    })
};

await write();
