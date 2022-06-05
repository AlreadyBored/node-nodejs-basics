import * as fs from 'fs'

export const write = async () => {
    const stream = fs.createWriteStream(`./src/streams/files/fileToWrite.txt`)
    process.stdin.on('data', data => {
        stream.write(data)
    })
};

await write()