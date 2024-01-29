import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __dirname = dirname(fileURLToPath(import.meta.url));

const read = async () => {
    // Write your code here

    const pathToFile = path.join(
        __dirname,
        "files",
        "fileToRead.txt"
    );
    const readStream = fs.createReadStream(pathToFile);
    let result = '';

    readStream.on('data', (chunk) => {
        result += chunk.toString();
    })

    readStream.on('end', () => {
        process.stdout.write(result)
    })
  
};

await read();