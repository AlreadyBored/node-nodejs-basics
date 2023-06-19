import {readdir} from 'fs/promises';
import {dirname, join} from 'path';
import {fileURLToPath} from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const list = async () => {
try {
		const files = await readdir(join(__dirname, 'files'));
		console.log(files);
	} catch (err) {
		if (err) throw 'Error: FS Operation failed';
	}
};

await list();
