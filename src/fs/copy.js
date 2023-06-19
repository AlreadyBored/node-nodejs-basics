import { readdir, mkdir, copyFile } from 'fs/promises'
import { existsSync } from 'fs'

const FOLDER = {
    SOURCE: 'src/fs/files',
    DESTINATION: 'src/fs/files_copy',
}

const copy = async () => {
    if (!existsSync(FOLDER.SOURCE) || existsSync(FOLDER.DESTINATION)) {
        throw new Error('FS operation failed')
    }

    const [files] = await Promise.all([readdir(FOLDER.SOURCE), mkdir(FOLDER.DESTINATION)])

    for (const file of files) {
        await copyFile(`${FOLDER.SOURCE}/${file}`, `${FOLDER.DESTINATION}/${file}`)
    }
};

await copy();
