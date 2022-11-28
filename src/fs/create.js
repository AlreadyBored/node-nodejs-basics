import { writeFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const create = async () => {
    const fileNameWithPath = join(
        dirname(fileURLToPath(import.meta.url)),
        'files',
        'fresh.txt'
    )
    const data = 'I am fresh and young'
    await writeFile(fileNameWithPath, data, { flag: 'wx' }).catch((err) => {
        if (err.code === 'EEXIST') {
            throw new Error('FS operation failed')
        }
    })
}

await create()
