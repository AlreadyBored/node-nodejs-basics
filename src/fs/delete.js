import { unlink } from 'fs'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

export const remove = async () => {
    const __filename = fileURLToPath(import.meta.url)
    const __dirname = dirname(__filename)

    unlink(__dirname + '\\files\\fileToRemove.txt', (err) => {
        if (err) {
            process.stderr.write('FS remove operation failed\n')
            return
        }
    })
}
