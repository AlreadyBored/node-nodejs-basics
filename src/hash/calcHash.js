import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
import { readFile } from 'fs/promises';
const { createHash } = await import('crypto');

const calculateHash = async () => {
	const hash = createHash('sha256');
	const data = await readFile(join(__dirname, 'files', 'fileToCalculateHashFor.txt'));
	return hash.update(data).digest('hex');
};

await calculateHash();
