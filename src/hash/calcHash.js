//calcHash.js- реализовать функцию, которая вычисляет хэш SHA256 для файла fileToCalculateHashFor.txt и записывает его в консоль как  hex
import { createReadStream } from 'fs';
import { createHash } from 'crypto'
const calculateHash = async () => {
    const path = './files/fileToCalculateHashFor.txt'
    const hash = createHash('SHA256')
    const stream = createReadStream(path)

    return new Promise((resolve, reject) => {
        stream.on('error', (err) => {
            reject(err)
        })
        stream.on('data', (chunk) => {
            hash.update(chunk)
        })
        stream.on('end', () => {
            const hexHash = hash.digest('hex')
            console.log(`hash for ${path}: ${hexHash}`)
            resolve(hexHash)
        })
    })
};

await calculateHash();