import fs from "fs";

const write = async () => {
    const writeStream = fs.createWriteStream('src/streams/files/fileToWrite.txt');
    process.stdin.on('data', (data) => {
        writeStream.write(data);
        process.exit();
    });
};

await write();
