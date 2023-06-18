import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const file = path.join(__dirname, 'files', 'fresh.txt');
const content = 'I am fresh and young';
const err_msg = 'FS operation failed';

const create = async () => {
	// Write your code here
	if (fs.existsSync(file)) {
		throw new Error(err_msg);
	}

	fs.writeFile(file, content, (err) => {
		if (err) throw new Error(err_msg);
		console.log('Saved');
	});
};

await create();
