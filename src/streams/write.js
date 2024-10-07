import fs from 'node:fs';
import { join } from 'node:path';
import { stdin } from 'node:process';

const FILE_NAME = 'fileToWrite.txt';
export const FOLDER = '/files';

export const fullName = join(import.meta.dirname, FOLDER, FILE_NAME);

const write = async () => {
    const ws = fs.createWriteStream(fullName);
    
    stdin.pipe(ws);

    ws.on('error', (error) => {
        console.log(error)
    });
};

await write();