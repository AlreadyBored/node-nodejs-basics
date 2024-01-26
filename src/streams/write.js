import process from 'process';
import { createWriteStream } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const write = async () => {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const filePath = path.join(__dirname, 'files', 'fileToWrite.txt');
    
    const writeStream = createWriteStream(filePath);

    process.stdin.on('data', data => { 
        writeStream.write(data); 
    });
    process.stdin.on('error', (error) => {
        console.error('Error occured during writing data', error);
    });
    process.stdin.on('end', () => {
        console.log('Data has been successfully written in the text file');
        process.exit();
    });
    
};

await write();