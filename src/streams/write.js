import { createWriteStream } from 'fs'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

export const write = async () => {
    const __filename = fileURLToPath(import.meta.url)
    const __dirname = dirname(__filename)

    try {
        const stream = createWriteStream(__dirname + '\\files\\fileToWrite.txt')
        process.stdin.resume()
        process.stdin.on('data', (res) => {
            stream.write(res)
        })
    } catch (error) {
        process.stdout.write('Read stream error\n')
    }
}
