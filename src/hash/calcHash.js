import fs from 'fs';
import crypto from 'crypto';
import path from 'path';
import { fileURLToPath } from 'url';

const calculateHash = async () => {
	// Write your code here
	const __filename = fileURLToPath(import.meta.url);
	const __dirname = path.dirname(__filename);
	const pathFile = path.join(__dirname, './files/fileToCalculateHashFor.txt');

	fs.readFile(pathFile, (err, data) => {
		if (err) {
			console.error(`Error reading file ${err}`);
			return;
		}
		const hash = crypto.createHash('sha256');
		hash.update(data);
		const hashHex = hash.digest('hex');

		console.log(`SHA256 hash: ${hashHex}`);
	});
};

await calculateHash();
