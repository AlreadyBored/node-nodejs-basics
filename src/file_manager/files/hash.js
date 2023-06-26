import { readFile } from 'fs/promises';
import { createHash } from 'crypto';

const calculateHash = async (path) => {
    const contents = await readFile(path, { encoding: 'utf8' });
    const hash = createHash('sha256');
    const result = hash.update(contents).digest('hex');
    console.log(result);
};

export {calculateHash}
