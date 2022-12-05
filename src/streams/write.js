import { createWriteStream } from 'node:fs';
import { resolve } from 'path';
import { stdin} from 'node:process';

const write = async () => {
    const absolutePath = await resolve('files', 'fileToWrite.txt');
    const writableStream = createWriteStream(absolutePath);

    stdin.resume().pipe(writableStream);
};

await write();