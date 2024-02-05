import { existsSync } from 'fs'
import fs from 'fs/promises'
const filePath = './src/fs/files/'
const filename = 'fileToRemove.txt'
const remove = async () => {
	if (!existsSync(`${filePath}${filename}`)) {
		throw new Error('FS operation failed')
	}
	await fs.unlink(`${filePath}${filename}`)
}

await remove().catch((err) => console.error(err))
