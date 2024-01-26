/**
 * implement function that writes process.stdin data into file 
 * fileToWrite.txt content using Writable Stream
 */
import { createWriteStream } from 'fs';
import { join as platform_path } from 'path';
import { stdin } from 'process';

const write = async () => {
    // Write your code here 
    return stdin.pipe(createWriteStream(platform_path('files', 'fileToWrite.txt'))); 
};

await write();