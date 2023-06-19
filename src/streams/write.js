import fs from "fs";

const write = async () => {
    const fileToWritePath = './files/fileToWrite.txt'

    const writeStream = fs.createWriteStream(fileToWritePath);

    process.stdin.on('data', (data) => {
        writeStream.write(data);
    });
};

await write();