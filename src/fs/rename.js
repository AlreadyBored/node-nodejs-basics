import { rename as newName } from 'fs'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

export const rename = async () => {
    const __filename = fileURLToPath(import.meta.url)
    const __dirname = dirname(__filename)

    newName(
        __dirname + '\\files\\wrongFilename.txt',
        __dirname + '\\files\\properFilename.md',
        (err) => {
            if (err) {
                process.stderr.write('FS rename operation failed\n')
                return
            }
        }
    )
}
