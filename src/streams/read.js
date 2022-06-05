import * as fs from 'fs'

export const read = async () => {
    const stream = fs.createReadStream(`./src/streams/files/fileToRead.txt`);
    stream.pipe(process.stdout)
};

await read()