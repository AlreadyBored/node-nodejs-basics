import {readFile} from 'fs/promises';
import {dirname, join} from 'path';
import {fileURLToPath} from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const file = join(__dirname, 'files', 'fileToRead.txt');

const read = async () => {
try {
		const data = await readFile(file, {encoding: 'utf8'})
		console.log(data);
	} catch (err) {
		if (err) throw 'Error: FS operation failed';
	}
};

await read();
