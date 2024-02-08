import fs from 'fs'
import path from 'path'
import { getFilePath } from '../tools/filepath.js'
const read = async () => {
	const { __dirname } = getFilePath(import.meta.url)
	const fileToReadPath = path.join(__dirname, 'files', 'fileToRead.txt')
	const readStream = fs.createReadStream(fileToReadPath)
	readStream.pipe(process.stdout)
}

await read()
