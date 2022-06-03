import crypto from 'crypto'
import fs from 'fs'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

export const calculateHash = async () => {
    const hash = crypto.createHash('sha256')
    try {
        const data = fs.readFileSync(
            dirname(fileURLToPath(import.meta.url)) +
                '\\files\\fileToCalculateHashFor.txt'
        )
        const ret = hash.update(data).digest('hex')
        process.stdout.write(ret + '\n')
        return ret
    } catch (error) {
        process.stderr.write('Hash error')
    }
}
