import { createHash } from 'crypto'
import { createReadStream } from "fs";

const file = new URL('./files/fileToCalculateHashFor.txt', import.meta.url)

const calculateHash = async () => {
    // Write your code here
    const readableStream = createReadStream(file)

    const getHash = (data) => createHash('sha256')
        .update(data).digest('hex')

    readableStream.on('data', (data) => {
        const hash = getHash(data)
        process.stdout.write(hash)
    })
};

await calculateHash();
