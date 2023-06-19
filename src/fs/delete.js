import fs from 'node:fs'

const FILENAME = {
    TO_REMOVE: 'src/fs/files/fileToRemove.txt'
}

const isFileToRemoveExists = fs.existsSync(FILENAME.TO_REMOVE);

const remove = async () => {
    if (!isFileToRemoveExists) throw new Error('FS operation failed')

    fs.rm(FILENAME.TO_REMOVE, () => {})
};

await remove();
