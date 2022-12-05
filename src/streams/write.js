import fs from 'fs'
import fstream from 'stream'

const destination = "./src/streams/files/fileToWrite.txt"

const write = async () => {
    let stream = fs.createWriteStream(destination, 'utf8')
    let input = process.stdin
    fstream.pipeline(input, stream, () => {})
};

await write();