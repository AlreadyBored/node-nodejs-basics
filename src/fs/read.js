import fs from "fs/promises";

const fileToReadPath = "src/fs/files/fileToRead.txt";

const read = async () => {
    try {
        const fileContent = await fs.readFile(fileToReadPath, { encoding: "utf-8" });
        console.log(fileContent);
    } catch {
        throw new Error("FS operation failed");
    }
};

await read();
