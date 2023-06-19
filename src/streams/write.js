import * as fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const write = async () => {
    const targetFile = `${dirname(fileURLToPath(import.meta.url))}/files/fileToWrite.txt`;
    
    const writeAbleStream = fs.createWriteStream(targetFile, {flags: 'r+'})
    process.stdin.pipe(writeAbleStream)
};

await write();