import { access, readdir } from 'node:fs';

const path = 'src/fs/files'

export const list = async () => {
    access(path, (err) => {
        if (err?.code === "ENOENT") throw 'FS operation failed'

        readdir(path, (err, files) => {
            if (err) throw 'FS operation failed'

            console.log(files)
        })
    })
};

list()
