import fs from "fs";

const read = async () => {
    const dir = 'src/streams/files/'
    const targetFile = 'fileToRead.txt'

    const stream = fs.createReadStream(dir + targetFile, 'utf8');
    await stream.on('data',(buffer) => {
        process.stdout.write(buffer);
    })
};

await read();
