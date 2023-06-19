import fs from 'fs'

const readPath = "./src/fs/files/fileToRead.txt"

const read = async () => {
    if (!fs.existsSync(readPath)) {
        throw new Error("FS operation failed");
    }

    const content = fs.readFileSync(readPath);
    console.log(""+ content);

};

await read();
