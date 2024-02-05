import { existsSync } from 'fs'
import fs from 'fs/promises'
const read = async () => {
	if (!existsSync('./src/fs/files/fileToRead.txt')) {
		throw new Error('FS operation failed')
	}
	const data = await fs.readFile('./src/fs/files/fileToRead.txt', {
		encoding: 'utf8',
	})
	console.log(data)
}

await read().catch((err) => console.error(err))
