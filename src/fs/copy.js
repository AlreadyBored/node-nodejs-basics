import { cp } from 'fs/promises';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const copy = async () => {
	try {
		await cp(join(__dirname, 'files'), join(__dirname, 'files_copy'), { recursive: true, force: false, errorOnExist: true });
	} catch (err) {
		if (err.code === 'ENOENT' || err.code === 'ERR_FS_CP_EEXIST') throw 'Error: FS operation failed';
	}
};

await copy();
