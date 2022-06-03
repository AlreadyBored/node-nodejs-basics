import { readFile } from 'fs'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

export const read = async () => {
    const __filename = fileURLToPath(import.meta.url)
    const __dirname = dirname(__filename)

    readFile(__dirname + '\\files\\fileToRead.txt', (err, data) => {
        if (err) {
            process.stderr.write('FS read operation failed\n')
            return
        }
        process.stdout.write(data + '\n')
    })
}
