import { existsSync } from 'fs'
import fs from 'fs/promises'
const remove = async () => {
	if (!existsSync('./src/fs/files/fileToRemove.txt')) {
		throw new Error('FS operation failed')
	}
	await fs.unlink('./src/fs/files/fileToRemove.txt')
}

await remove().catch((err) => console.error(err))
