import fs from "fs";

const write = async () => {
    const dir = 'src/streams/files/'
    const targetFile = 'fileToWrite.txt'

    const stream = fs.createWriteStream(dir + targetFile)
    process.stdin.on('data', (buffer) => {
        stream.write(buffer);
    });
};

await write();
