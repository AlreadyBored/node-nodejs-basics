import {join, dirname} from "path";
import {fileURLToPath} from 'url';
import {createWriteStream} from 'fs';

export const write = async () => {
    const file_name = join(dirname(fileURLToPath(import.meta.url)), 'files', 'fileToWrite.txt');
    const stream= createWriteStream(file_name);
    await process.stdout.pipe(stream);
};

write();
