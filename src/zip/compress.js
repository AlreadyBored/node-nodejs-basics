import { createReadStream, createWriteStream } from 'fs'
import path from 'path'
import { pipeline } from 'stream/promises'
import { createGzip } from 'zlib'
import { getFilePath } from '../tools/filepath.js'

const compress = async () => {
	try {
		const { __dirname } = getFilePath(import.meta.url)
		const source = createReadStream(
			path.join(__dirname, 'files', 'fileToCompress.txt'),
		)
		const destination = createWriteStream(
			path.join(__dirname, 'files', 'archive.gz'),
		)
		const gzip = createGzip()
		await pipeline(source, gzip, destination)
	} catch {
		throw new Error('Compress operation failed')
	}
}

await compress()
