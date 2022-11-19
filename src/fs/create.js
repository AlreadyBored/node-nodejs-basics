import * as fs from 'node:fs/promises'
import * as path from 'node:path'
import {fileURLToPath} from 'url';


const create = async () => {
    // Write your code here
    const fileName = 'fresh.txt'
    const content = 'I am fresh and young'
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename)
    const fullPath = path.join(__dirname, 'files', fileName)
    const isFileExists = await fs.access(fullPath, fs.constants.R_OK | fs.constants.W_OK)
        .then(() => true)
        .catch(() => false)
    if (isFileExists) {
        throw new Error('FS operation failed')
    } else {
        await fs.appendFile(fullPath, content);
    }
}

await create();
