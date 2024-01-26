import { createHash } from 'node:crypto'
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const fileDir = path.join(__dirname, 'files/fileToCalculateHashFor.txt');

const calculateHash = async () => {
	const fileContent = fs.readFileSync(fileDir).toString();
	const hex = createHash('sha256')
		.update(fileContent)
		.digest('hex');
	process.stdout.write(hex);
};

await calculateHash();
