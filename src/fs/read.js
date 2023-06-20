import fs from "fs";

const read = async () => {
    fs.createReadStream('./src/fs/files/fileToRead.txt').setEncoding('utf8').pipe(process.stdout)
};

await read();
