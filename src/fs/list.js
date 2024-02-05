import fs from 'fs/promises'
import { existsSync } from 'fs'

const list = async () => {
	if (!existsSync('./src/fs/files')) {
		throw new Error('FS operation failed')
	}
	const files = await fs.readdir('./src/fs/files')
	console.log(files)
}

await list().catch((err) => console.error(err))
