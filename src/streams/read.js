import fs from "fs";
import path from "path";

export const read = async () => {
    const __dirname = path.resolve();
    const filename = path.join(__dirname, "files/fileToRead.txt");
    const readableStream = fs.createReadStream(filename);
    readableStream.on('data', chunk => process.stdout.write(chunk));
};

read();