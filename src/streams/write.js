import fs from 'fs';

const write = async () => {
    const dir = 'src/streams/files/fileToWrite.txt';

    const writeStream = fs.createWriteStream(dir); 
    
    process.stdin.on('data', (chunk) => {
        writeStream.write(chunk.toString());
    })
    
};

await write();