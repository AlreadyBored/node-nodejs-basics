import { createReadStream } from 'fs'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

export const read = async () => {
    const __filename = fileURLToPath(import.meta.url)
    const __dirname = dirname(__filename)

    try {
        const stream = createReadStream(__dirname + '\\files\\fileToRead.txt')
        stream.on('data', (e) => {
            process.stdout.write(e.toString())
        })
    } catch (error) {
        process.stdout.write('Read stream error\n')
    }
}
