import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { createReadStream } from 'fs';
import { stdout } from 'process';

const read = async () => {
    const file = join(dirname(fileURLToPath(import.meta.url)), 'files', 'fileToRead.txt');
    const stream = createReadStream(file, { encoding: 'utf8' });

    const handleError = (err) => {
        console.log(err);
        stream.destroy();
    };
    stream.on('error', handleError).pipe(stdout);
};

await read();
