import { createWriteStream } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const write = async () => {
    const writable = createWriteStream(__dirname + '\\files\\fileToWrite.txt')

    console.log('Type something and press Enter:');
    process.stdin.on('data', data => { 
        writable.write(data.toString());
        process.exit(); 
    });
};

await write();