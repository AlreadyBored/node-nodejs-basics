import { existsSync } from 'fs'
import fs from 'fs/promises'
const distPath = './src/fs/files'

const list = async () => {
	if (!existsSync(`${distPath}`)) {
		throw new Error('FS operation failed')
	}
	const files = await fs.readdir(`${distPath}`)
	console.log(files)
}

await list().catch((err) => console.error(err))
