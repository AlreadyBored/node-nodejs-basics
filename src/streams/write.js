import fs from 'fs';

export const write = async () => {
    let writeStream = fs.createWriteStream('./src/streams/files/fileToWrite.txt');

    process.stdin.on('data', data => {
        writeStream.write(data.toString());
        process.exit();
    });
};

write();