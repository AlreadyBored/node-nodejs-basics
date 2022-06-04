import { readFile } from 'fs/promises'
import { createHash } from 'crypto'

export const calculateHash = async () => {
    // Write your code here 
    const PATH = './src/hash/files/fileToCalculateHashFor.txt'

    const file = await readFile(PATH);
    const hash = createHash('sha256').update(file).digest('hex');

    console.log(hash)
    return hash;
};

calculateHash();