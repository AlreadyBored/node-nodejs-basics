import { createReadStream } from "fs";

const file = './files/fileToRead.txt'

const read = async () => {
    const readStream = createReadStream(file)

    readStream.on('data', (data) => {
        process.stdout.write(data)
    })
};

await read();