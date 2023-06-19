import fs from 'fs'

const read = async () => {
    const filePath = new URL('files/fileToRead.txt', import.meta.url)
    const readableStream = fs.createReadStream(filePath, 'utf8')

    readableStream.on('data', (chunk) => {
        process.stdout.write(chunk)
    })
};

await read();