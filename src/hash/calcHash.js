import fs from 'node:fs/promises';
import crypto from 'node:crypto'; // import the crypto module

import { fileURLToPath } from 'node:url';
import { join, dirname } from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// the func using the sha-256 algorithm
const calculateHash = async () => {
	// path to the file (string) needs to be hashed
	const filePath = join(__dirname, 'files', 'fileToCalculateHashFor.txt');

	try {
		const data = await fs.readFile(filePath); // get the data to be heshed
		const hash = crypto.createHash('sha256'); // method to create the hasher
		hash.update(data); // hash the file. it also accepts a continuous stream of data like a buffer
		const hashHex = hash.digest('hex'); // define the output format for the hash. It can be hex, binary, or base64

		console.log('SHA256 hash:', hashHex); // print the hashed data
	} catch (error) {
		console.error('Error calculating hash:', error);
	}
};

// to check the code, in terminal call: node --experimental-modules ./calcHash.js

await calculateHash();
