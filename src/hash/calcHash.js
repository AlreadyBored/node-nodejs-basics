/**
 *  implement function that calculates SHA256 hash for file fileToCalculateHashFor.txt 
 * and logs it into console as hex using Streams API
 */
import { createReadStream } from 'fs';
import { createHash } from 'crypto';
import { stdout } from 'process';
import { fileURLToPath } from 'url';
import { dirname, normalize } from 'path';

const dir = dirname(fileURLToPath(import.meta.url));

const calculateHash = async () => {
    // Write your code here 
    return createReadStream(normalize(dir + '/files/fileToCalculateHashFor.txt'))
        .pipe(createHash('sha256'))
        .setEncoding('hex')
        .pipe(stdout)
        .on('unpipe', () => console.log());    
};

await calculateHash();