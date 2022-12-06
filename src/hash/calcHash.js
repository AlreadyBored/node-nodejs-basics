import { createHash } from 'crypto'

const calculateHash = async () => {
    // Write your code here 
    const hash = createHash('sha256')
    const hex = hash.update('./src/hash/files/fileToCalculateHashFor.txt').digest('hex')
    console.log(hex)
};

await calculateHash();