import fs from "fs";
import path from "path";
import url from "url";

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const write = async () => {
    const fileToWritePath = path.join(__dirname, './files/fileToWrite.txt')

    const writeStream = fs.createWriteStream(fileToWritePath);

    process.stdin.on('data', (data) => {
        writeStream.write(data);
    });
};

await write();