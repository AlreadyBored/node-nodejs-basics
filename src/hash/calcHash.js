import { createHash } from 'node:crypto';
import fs from 'fs';
import path from 'path';

const target = path.resolve(
	path.join('src/hash/files', 'fileToCalculateHashFor.txt')
);

const calculateHash = async () => {
	// Write your code here
	const content = fs.readFileSync(target, { encoding: 'utf-8' });

	const res = createHash('sha256').update(content).digest('hex');

	console.log(res);
};

await calculateHash();
