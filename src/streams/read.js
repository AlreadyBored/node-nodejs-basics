import * as fs from 'fs'
import * as stream from 'stream'

const fileLoc = "./src/streams/files/fileToRead.txt"

export const read = async () => {
    const readable = fs.createReadStream(fileLoc)
    readable.on('data', (chunk) => {
        return process.stdout.write(chunk)
    })
};
read()