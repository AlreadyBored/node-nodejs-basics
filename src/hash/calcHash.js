import { readFile } from 'fs/promises';
import { createHash } from 'crypto';

const FILE_PATH = 'files/fileToCalculateHashFor.txt'
const ALGORITHM = 'sha256'
const FILE_ENCODING = 'utf-8';
const HASH_ENCODING = 'hex'

export const calculateHash = async () => {
    const content = await readFile(FILE_PATH, FILE_ENCODING);

    return createHash(ALGORITHM)
    .update(content)
    .digest(HASH_ENCODING);
};

calculateHash()
.then(console.log)
