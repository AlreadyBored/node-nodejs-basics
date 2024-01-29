import * as fs from 'fs';

const write = async () => {
    const writableStream = fs.createWriteStream('src/streams/files/fileToWrite.txt');

    process.stdin.on('data', data => { 
        writableStream.write(data.toString());
      });
};

await write();