import { writeFile, open } from 'node:fs';

export const create = async () => {
    open('src/fs/files/fresh.txt', 'wx', (err, fd) => {
        if (err?.code === 'EEXIST') throw 'FS operation failed'

        writeFile(fd, 'I am fresh and young', (err) => {
            if (err) throw err
        })
    })
};

create()
