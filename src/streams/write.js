import {createWriteStream} from 'fs';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename =  fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const write = async () => {
    const writeStream = createWriteStream(__dirname+"/files/fileToWrite.txt");
    process.stdin.pipe(writeStream);

};

write();