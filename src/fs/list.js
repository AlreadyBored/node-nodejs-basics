import { readdir } from 'fs/promises'
import { getDirname } from '../dirname.js'

const __dirname = getDirname(import.meta.url)

const list = async () => {
    try {
        const files = await readdir(`${__dirname}/files`)
        console.log('List:', files)
    } catch (err) {
        throw new Error('FS operation failed')
    }
};

await list();
