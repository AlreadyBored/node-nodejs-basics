/**
 * implement function that reads file fileToRead.txt content using 
 * Readable Stream and prints it's content into process.stdout
 */

import { createReadStream } from 'fs';
import { stdout } from 'process';
import { fileURLToPath } from 'url';
import { dirname, normalize } from 'path';
const dir = dirname(fileURLToPath(import.meta.url));

const read = async () => {
    // Write your code here     
    return createReadStream(normalize(dir + '/files/fileToRead.txt')).pipe(stdout);
};

await read();