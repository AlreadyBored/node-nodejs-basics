import { readdir } from 'fs'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

export const list = async () => {
    const __filename = fileURLToPath(import.meta.url)
    const __dirname = dirname(__filename)

    readdir(__dirname + '\\files', (err, files) => {
        if (err) {
            process.stderr.write('FS list operation failed\n')
            return
        }
        process.stdout.write(files.toString() + '\n')
    })
}
