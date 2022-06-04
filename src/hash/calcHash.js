import fs from 'fs'
import crypto from 'crypto'

export const calculateHash = async () => {
    fs.readFile('./src/hash/files/fileToCalculateHashFor.txt', (err, data) => {
        if(err) throw new Error('Failde')
        const hashAlgorithm = crypto.createHash('sha256');
        console.log(hashAlgorithm.update(data).digest('hex'))
    })
};

calculateHash()