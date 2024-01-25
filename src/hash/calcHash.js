import { createHash } from 'node:crypto'
import fs from 'fs';

const filePath = 'src/hash/files/fileToCalculateHashFor.txt';
const calculateHash = async () => {
	const fileContent = fs.readFileSync(filePath).toString();
	const hex = createHash('sha256')
		.update(fileContent)
		.digest('hex');
	process.stdout.write(hex);
};

await calculateHash();
