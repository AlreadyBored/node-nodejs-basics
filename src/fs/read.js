import { open, readFile } from 'node:fs';

export const read = async () => {
    open('src/fs/files/fileToRead.txt', 'r', (err, fd) => {
        if (err?.code === 'ENOENT') throw 'FS operation failed'

        readFile(fd, { encoding: 'utf8' }, (err, content) => {
            if (err) throw err

            console.log(content)
        })
    })
};

read()
