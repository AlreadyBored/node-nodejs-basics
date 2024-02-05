import { existsSync } from 'fs'
import fs from 'fs/promises'
const filePath = './src/fs/files/'
const filename = 'fileToRead.txt'
const read = async () => {
	if (!existsSync(`${filePath}${filename}`)) {
		throw new Error('FS operation failed')
	}
	const data = await fs.readFile(`${filePath}${filename}`, {
		encoding: 'utf8',
	})
	console.log(data)
}

await read().catch((err) => console.error(err))
