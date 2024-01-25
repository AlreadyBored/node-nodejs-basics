/**
 *  implement function that calculates SHA256 hash for file fileToCalculateHashFor.txt 
 * and logs it into console as hex using Streams API
 */
import { createReadStream } from 'fs';
import { createHash } from 'crypto';
import { join as platform_path } from 'path';
import { stdout } from 'process';

const calculateHash = async () => {
    // Write your code here 
    let src = platform_path('files', 'fileToCalculateHashFor.txt');

    const hash = createHash('sha256');

    const instream = createReadStream(src);

    return instream.pipe(hash).setEncoding('hex').pipe(stdout);
};

await calculateHash();