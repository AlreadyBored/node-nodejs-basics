import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const fileDir = path.join(__dirname, 'files/fresh.txt');

const create = async () => {
	if (fs.existsSync(fileDir)) {
		throw new Error('FS operation failed');
	}
	fs.appendFile(fileDir, 'I am fresh and young', (err) => console.log(err));
};

await create();
