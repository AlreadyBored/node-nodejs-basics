import { createReadStream } from "fs";

const file = new URL('./files/fileToRead.txt', import.meta.url)

const read = async () => {
    const readStream = createReadStream(file)

    readStream.on('data', (data) => {
        process.stdout.write(data)
    })
};

await read();