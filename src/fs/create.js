import { mkdir, writeFile } from 'fs'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

export const create = async () => {
    const __filename = fileURLToPath(import.meta.url)
    const __dirname = dirname(__filename)

    mkdir(__dirname + '\\files', () => {
        writeFile(
            __dirname + '\\files\\fresh.txt',
            'I am fresh and young',
            'utf8',
            (err) => {
                if (err) {
                    process.stderr.write('FS create operation failed\n')
                }
            }
        )
    })
}
