/**
 * implement function that reads file fileToRead.txt content using 
 * Readable Stream and prints it's content into process.stdout
 */

import { createReadStream } from 'fs';
import { join as platform_path } from 'path';
import { stdout } from 'process';

const read = async () => {
    // Write your code here     
    return createReadStream(platform_path('files', 'fileToRead.txt')).pipe(stdout);
};

await read();