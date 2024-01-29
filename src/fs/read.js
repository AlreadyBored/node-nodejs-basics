import fs from "fs";

const read = async () => {
    // Write your code here
    const readFilePath = './files/fileToRead.txt'

    if (!fs.existsSync(readFilePath)) {
        throw new Error('FS operation failed');
    }

    console.log(fs.readFileSync(readFilePath, {encoding: 'utf-8'}))
};

await read();