import fs from "fs";

const write = async () => {
    const fileToWritePath = './files/fileToWrite.txt'
    const textForWriting = 'This file should be written using Streams API'

    const writeStream = fs.createWriteStream(fileToWritePath);

    writeStream.write(textForWriting)

    process.stdin.on('data', (data) => {
        writeStream.write(data);
    });
};

await write();