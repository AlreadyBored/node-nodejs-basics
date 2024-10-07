import fs from "node:fs/promises";
import * as path from "path";

const create = async () => {
	const filePath = path.join('files', 'fresh.txt');

	try {
		await fs.access(filePath)
		console.error('FS operation failed')
	} catch (err) {
		if (err.code === 'ENOENT'){
			await fs.writeFile(filePath, 'I am fresh and young!')
		}
		return err;
	}
};

await create();