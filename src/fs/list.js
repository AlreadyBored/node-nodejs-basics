import fs from 'node:fs/promises'
import { existsSync } from 'node:fs'

const FILES_FOLDER = 'src/fs/files'

const isFileFolderExists = existsSync(FILES_FOLDER)

const list = async () => {
    if (!isFileFolderExists) throw new Error('FS operation failed')

    const files = await fs.readdir(FILES_FOLDER)
    console.log(files)
};

await list();
