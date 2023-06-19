import fs from 'fs';

const write = async () => {
    
    const writer = fs.createWriteStream('./src/streams/files/fileToWrite.txt')
    process.stdin.on('data', data => {
        writer.write(data);
    });

};

await write();