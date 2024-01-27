/**
 * implement function that writes process.stdin data into file 
 * fileToWrite.txt content using Writable Stream
 */
import { createWriteStream } from 'fs';
import { stdin } from 'process';
import { fileURLToPath } from 'url';
import { dirname, normalize } from 'path';
const dir = dirname(fileURLToPath(import.meta.url));

const write = async () => {
    // Write your code here 
    return stdin.pipe(createWriteStream(normalize(dir + '/files/fileToWrite.txt'))); 
};

await write();