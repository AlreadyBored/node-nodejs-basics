import { createHash } from 'node:crypto'
import { readFile } from 'node:fs/promises'
const calculateHash = async () => {
    const data = await readFile('src/hash/files/fileToCalculateHashFor.txt')

    const result = createHash('sha256').update(data).digest('hex')

    console.log(result)
};

await calculateHash();
