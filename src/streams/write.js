import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { createWriteStream } from 'fs';
import { stdin } from 'process';

const write = async () => {
    const file = join(dirname(fileURLToPath(import.meta.url)), 'files', 'fileToWrite.txt');
    const stream = createWriteStream(file, { encoding: 'utf8' });

    const handleError = (err) => {
        console.log(err);
        stream.destroy();
    };

    stdin.pipe(stream).on('error', handleError);
};

await write();
