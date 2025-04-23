import fs from 'fs';

const read = async () => {
    // Write your code here 
    const reader = fs.createReadStream('./src/streams/files/fileToRead.txt', 'utf-8')
    reader.on('data',(chunk) => process.stdout.write(chunk))
};

await read();