import fs from "fs"

export const read = async () => {
    const path = ('./files/fileToRead.txt')
    const readStream = fs.createReadStream(path)
    readStream.on('data', (chunk) => {
        process.stdout.write(chunk.toString())
    })
};

read()
