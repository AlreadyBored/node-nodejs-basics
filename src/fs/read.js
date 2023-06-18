import * as fs from "node:fs";

const filePath = "src/fs/files/fileToread.txt";

const read = async () => {
    fs.readFile(filePath, "utf8", (err, data) => {
        if (err) {
            throw new Error("FS operation failed");
        }
        console.log(data);
    });
};

await read();
