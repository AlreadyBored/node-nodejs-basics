import fs from 'fs';

const write = async () => {
    let writeStream = fs.createWriteStream('./src/streams/files/fileToWrite.txt');
    process.stdin.pipe(writeStream);

    setTimeout(() => {
        console.log('Manually close the file stream.');
    
        writeStream.end();
    }, 5000);
};

await write();