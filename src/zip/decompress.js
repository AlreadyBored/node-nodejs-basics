import { createReadStream, createWriteStream } from 'fs'
import path from 'path'
import { pipeline } from 'stream/promises'
import { createGunzip } from 'zlib'
import { getFilePath } from '../tools/filepath.js'

const decompress = async () => {
	try {
		const { __dirname } = getFilePath(import.meta.url)
		const source = createReadStream(path.join(__dirname, 'files', 'archive.gz'))
		const destination = createWriteStream(
			path.join(__dirname, 'files', 'fileToCompress.txt'),
		)
		const gzip = createGunzip()
		await pipeline(source, gzip, destination)
	} catch {
		throw new Error('Decompress operation failed')
	}
}

await decompress()
