import fs from 'node:fs/promises';
import crypto from 'node:crypto'; // import the crypto module

import { fileURLToPath } from 'node:url';
import { join, dirname } from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const calculateHash = async () => {
	const filePath = join(__dirname, 'files', 'fileToCalculateHashFor.txt');

	try {
		const data = await fs.readFile(filePath);
		const hash = crypto.createHash('sha256'); // create the hasher
		hash.update(data); // hash the file; it also accepts a continuous stream of data like a buffer
		const hashHex = hash.digest('hex'); // define the output format for the hash (it can be hex, binary or base64)

		console.log('SHA256 hash:', hashHex);
	} catch (err) {
		console.error('Error calculating hash:', err);
	}
};

// to check the code, in terminal call: node --experimental-modules ./calcHash.js

await calculateHash();
