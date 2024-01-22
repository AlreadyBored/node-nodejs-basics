import { writeFile } from 'fs/promises'
import { join } from 'path'
import { getDirname } from '../dirname.js'

const __dirname = getDirname(import.meta.url)

const create = async () => {
    const filePath = join(__dirname, 'files', 'fresh.txt')

    try {
        await writeFile(filePath, 'I am fresh and young', { flag: 'wx' })
    } catch (err) {
        throw new Error('FS operation failed')
    }
};

await create();
