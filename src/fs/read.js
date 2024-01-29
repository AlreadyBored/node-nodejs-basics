import fs from 'fs';
import path from "path";

const read = async () => {
    const fileName = 'fileToRead.txt';
    const filePath = new URL(path.resolve(`./files/${fileName}`), import.meta.url).pathname;

    if (!fs.existsSync(filePath)) {
        throw new Error(`FS operation failed: ${fileName} does not exist`);
    }

    const fileContent = fs.readFileSync(filePath, { encoding: 'utf8' });
    console.log(fileContent);
};

await read();