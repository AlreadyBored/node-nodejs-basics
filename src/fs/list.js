import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const target = path.resolve(__dirname, 'files');
const err_msg = 'FS operation failed';

const list = async () => {
	// Write your code here
	fs.readdir(target, (err, files) => {
		if (err) throw new Error(err_msg);

		console.log(files);
	});
};

await list();
