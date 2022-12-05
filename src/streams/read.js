import fs from 'fs';
const source = "./src/streams/files/fileToRead.txt"

const read = async () => {
    let stream = fs.createReadStream(source, 'utf8')
    stream.on('error', () => {
        throw new Error ('Streams operation failed')
    })
    stream.on('data', (data) => process.stdout.write(data + "\n"))
};

await read();