import fs from "fs";

const write = async () => {
    const fileStream = fs.createWriteStream('./files/fileToWrite.txt');
    process.stdout.write("Enter some text to write to file: ")
    process.stdin.pipe(fileStream);
};

await write();
