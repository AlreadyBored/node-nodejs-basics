import fs from 'fs'

export const write = async () => {
    const writableStream = fs.createWriteStream('./src/streams/files/fileToWrite.txt', 'utf-8')
    process.stdin.pipe(writableStream)
};

write()