import { createWriteStream } from 'fs';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

const filePath = './files/fileToWrite.txt';

const write = async (fp) => {
    
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const absoluteFilePath = path.join(__dirname, fp);

    const writeStream = createWriteStream(absoluteFilePath);

    process.stdin.pipe(writeStream);

    return new Promise((resolve, reject) => {
        writeStream.on('finish', () => {
            resolve();
        });

        writeStream.on('error', (err) => {
            reject(err);
        });
    });
};

await write(filePath);