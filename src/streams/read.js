import { stdout } from 'process';
import { createReadStream } from 'fs';

export const read = async () => {
    const fileStream = await createReadStream('./files/fileToRead.txt');

    await fileStream.on('readable', () => {
        const data = fileStream.read();
        stdout.write(`${data}`.replace(/null/g, ''));
      });
};
