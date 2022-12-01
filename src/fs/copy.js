import { open, cp } from 'node:fs';

const ERROR_MSG = 'FS operation failed'

export const copy = async () => {
    open('src/fs/files', 'r', (err) => {
        if (err?.code === 'ENOENT') throw ERROR_MSG

        open('src/fs/files_copy', 'r', (err) => {
            if (!err) throw ERROR_MSG

            cp('src/fs/files', 'src/fs/files_copy', { recursive: true }, (err) => console.error(err))
        })
    })
};

copy()
