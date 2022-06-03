import fs from "fs";
export const read = async () => {
    let readableStream = fs.createReadStream("./files/fileToRead.txt");
    readableStream.pipe(process.stdout)
};

read()