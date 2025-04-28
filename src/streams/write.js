import fs from 'fs';
import path from 'path';
import process from 'process';
import {pipeline} from 'stream';
const write = async () => {
    const filePath = path.join(import.meta.dirname, 'files', 'fileToWrite.txt');
    const writeStream = fs.createWriteStream(filePath, {flags:'a'});

    console.log('Please enter some text to write to file. Press Ctrl+D to finish.');

    pipeline(
        process.stdin,
        writeStream,
        (err) => {}
    );
};

await write();