import fs from 'fs'
import path from 'path'
import { getFilePath } from '../tools/filepath.js'
const write = async () => {
	const { __dirname } = getFilePath(import.meta.url)
	const fileToWritePath = path.join(__dirname, 'files', 'fileToWrite.txt')
	const writeStream = fs.createWriteStream(fileToWritePath)
	process.stdin.on('data', (data) => {
		writeStream.write(data.toString())
		process.exit()
	})
}

await write()
