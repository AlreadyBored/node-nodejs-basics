import { createWriteStream } from 'fs'
const stream = createWriteStream('./src/streams/files/fileToWrite.txt')

const write = async () => {
    // Write your code here 
    process.stdin.on('data', (chunk) => {
        const chunkToString = chunk.toString()
        stream.write(chunkToString)
    })
};



await write();

