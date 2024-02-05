import fs from 'fs/promises'
import { existsSync } from 'node:fs'
const fileName = 'fresh.txt'
const filePath = './src/fs/files/'

const create = async () => {
	if (existsSync(`${filePath}${fileName}`)) {
		throw new Error('FS operation failed')
	}
	// Content of the file
	const content = 'Some content!'
	// Create the file and write content
	await fs.writeFile(`${filePath}${fileName}`, content)
	console.log(`File "${fileName}" created successfully at "${filePath}"`)
}

await create().catch((err) => console.error(err))
