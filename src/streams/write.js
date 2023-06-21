import fs from "fs";

const write = async () => {
    process.stdin.pipe(fs.createWriteStream("./src/streams/files/fileToWrite.txt"))
};

await write();