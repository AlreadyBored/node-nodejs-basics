import { access, rename as renameFile } from 'node:fs';

const ERROR_MSG = 'FS operation failed'

export const rename = async () => {
    access('src/fs/files/wrongFilename.txt', (err) => {
        if (err?.code === "ENOENT") throw ERROR_MSG

        access('src/fs/files/properFilename.md', (err) => {
            if (!err) throw ERROR_MSG

            renameFile('src/fs/files/wrongFilename.txt', 'src/fs/files/properFilename.md', (err) => {
                if (err) throw err
            })
        })
    })
};

rename()
