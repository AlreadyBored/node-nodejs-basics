import { readdir, mkdir, cp } from 'fs'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

export const copy = async () => {
    const __filename = fileURLToPath(import.meta.url)
    const __dirname = dirname(__filename)

    readdir(__dirname + '\\files', { withFileTypes: true }, (err, file) => {
        if (err) {
            process.stderr.write('FS copy operation failed\n')
            return
        }
        mkdir(__dirname + '\\files_copy', (err) => {
            if (err) {
                process.stderr.write('FS copy operation failed\n')
                return
            }
            file.map((e) => {
                cp(
                    __dirname + '\\files/' + e.name,
                    __dirname + '\\files_copy/' + e.name,
                    () => {}
                )
            })
        })
    })
}
