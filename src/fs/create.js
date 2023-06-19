import { writeFile } from 'fs/promises';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const file = join(__dirname, 'files', 'fresh.txt');

const create = async () => {
	try {
		await writeFile(file, "I am fresh and young", { flag: 'ax' });
	} catch (err) {
		if (err.code === 'EEXIST') {
			throw "Error: FS operation failed"
		}
	}
}

await create();
