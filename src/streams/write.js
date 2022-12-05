import { createWriteStream } from 'node:fs';
import { resolve } from 'path';
import { stdin} from 'node:process';

const write = async () => {
    const absoluteFilePath = await resolve('files', 'fileToWrite.txt');
    const writableStream = createWriteStream(absoluteFilePath);

    stdin.resume().pipe(writableStream);
};

await write();