import fs from "fs";
import path from 'path';
import { fileURLToPath } from 'url';

const testString = 'This file should be write using Streams API';

const write = async (str = testString) => {
    const currentPath = path.dirname(fileURLToPath(import.meta.url));
    const filePath = currentPath + '/files/fileToWrite.txt';

    const writeStream = fs.createWriteStream(filePath);

    process.stdin.on("data", data => {
        writeStream.write(data, 'utf8');
    })
};

await write();