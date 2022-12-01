import { access, rm } from 'node:fs';

export const remove = async () => {
    access('src/fs/files/fileToRemove.txt', (err) => {
        if (err?.code === "ENOENT") throw 'FS operation failed'

        rm('src/fs/files/fileToRemove.txt', (err) => {
            if (err) throw err
        })
    })
};

remove()
