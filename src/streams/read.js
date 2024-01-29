import { createReadStream } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { pipeline } from 'stream'
const dirName = path.dirname(fileURLToPath(import.meta.url));
const sourcePath = path.join(dirName, "files", "fileToRead.txt");

const read = async () => {
  // createReadStream(sourcePath).pipe(process.stdout); 
  pipeline(
    createReadStream(sourcePath),
    process.stdout,
    (err) => {
      console.log(err);
    })
  
};

await read();