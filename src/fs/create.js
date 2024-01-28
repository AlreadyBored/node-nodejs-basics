import { open, write, close } from 'node:fs';
import path from 'path';

const create = async () => {
    const filePath = path.join('src', 'fs', 'files', 'fresh.txt');

    open(filePath, 'wx', (err, fd) => {
        if (err) {
            if (err.code === 'EEXIST') {
                throw new Error('FS operation failed');
            }

            throw err;
        }

        const text = 'I am fresh and young';

        write(fd, text, (err) => {
            if (err) throw err;

            close(fd, (err) => {
                if (err) throw err;
            });
        });
    });
};

await create();