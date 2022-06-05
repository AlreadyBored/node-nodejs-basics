import {join, dirname} from "path";
import {fileURLToPath} from 'url';
import {createReadStream} from 'fs';

export const read = async () => {
    const file_name = join(dirname(fileURLToPath(import.meta.url)), 'files', 'fileToRead.txt');
    const stream= createReadStream(file_name);
    await stream.pipe(process.stdout);
};

read();
