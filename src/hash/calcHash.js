import fs from 'fs';
const {createHash} = await import('node:crypto');

export const calculateHash = async () => {
    const file = fs.readFileSync('./src/hash/files/fileToCalculateHashFor.txt', 'utf8', () => {});
    console.log(createHash('sha256').update(file).digest('hex'));
};

calculateHash()