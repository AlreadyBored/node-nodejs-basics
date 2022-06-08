import { stdin } from 'process';
import { createWriteStream } from 'fs';

export const write = async () => {
    const writeableStream = await createWriteStream('./files/fileToWrite.txt');
    const data = JSON.stringify(stdin);
    
    await writeableStream.write(`${data}`);
};
