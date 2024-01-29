import { createWriteStream } from "fs";
const write = async () => {
    const path = 'src/streams/files/fileToWrite.txt'
    const fileStream = createWriteStream(path)
    process.stdin.pipe(fileStream)
};

await write();