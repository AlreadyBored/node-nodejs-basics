import path from 'path';
import fs from 'fs'
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const FILENAME_TO_READ = 'fileToRead.txt';


const read = async () => {
    const stream = fs.createReadStream(
        path.join(__dirname, 'files', FILENAME_TO_READ)
      );
    
      stream.on('data', (chunk) => {
        process.stdout.write(chunk);
      });
    
      stream.on('end', () => {
        console.log('\nFinished!');
      });
};

await read();