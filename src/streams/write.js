import { createWriteStream } from 'fs';

const write = async () => {
    const writable = createWriteStream('./files/fileToWrite.txt')

    console.log('Type something and press Enter:');
    process.stdin.on('data', data => { 
        writable.write(data.toString());
        process.exit(); 
    });
};

await write();