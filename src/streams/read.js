import { createReadStream } from "fs";
const read = async () => {
    const path = 'src/streams/files/fileToRead.txt'
    const fileStream = createReadStream(path)
    fileStream.pipe(process.stdout)
};

await read();