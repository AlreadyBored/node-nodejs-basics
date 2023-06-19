import { fileURLToPath } from 'node:url';
import { join, dirname } from 'node:path';
import fs from 'node:fs/promises';
import crypto from 'node:crypto';

// to verify in terminal, call: node --experimental-modules ./calcHash.js
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const calculateHash = async () => {
	const filePath = join(__dirname, 'files', 'fileToCalculateHashFor.txt');

	try {
		const data = await fs.readFile(filePath);
		const hash = crypto.createHash('sha256');
		hash.update(data);
		const hashHex = hash.digest('hex');

		console.log('SHA256 hash:', hashHex);
	} catch (error) {
		console.error('Error calculating hash:', error);
	}
};

await calculateHash();
