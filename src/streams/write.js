import fs from 'fs'

export const write = async () => {
    const readaBle = process.stdin

    const readbleStream = fs.createWriteStream('src/streams/files/fileToWrite.txt')

    readaBle.pipe(readbleStream)
};

// write()