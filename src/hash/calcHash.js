import { createHash } from 'crypto'
import { createReadStream } from "fs";

const file = './files/fileToCalculateHashFor.txt'

const calculateHash = async () => {
    const readableStream = createReadStream(file)

    const getHash = (data) => createHash('sha256')
        .update(data).digest('hex')

    readableStream.on('data', (data) => {
        const hash = getHash(data)
        process.stdout.write(hash)
    })
};

await calculateHash();