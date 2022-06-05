import fs from "fs/promises";

export const read = async () => {
    const filesFolder = "./src/fs/files";
    const readFilename = 'fileToRead.txt';
    try {
        const files = await fs.readdir(filesFolder);
        const readFile = files.find((file) => file === readFilename);
        if (!readFile) {
            throw new Error("FS operation failed");
        }
        if (readFile) {
            const content = await fs.readFile(`${filesFolder}/${readFilename}`, 'utf8');
            console.log(content);
        }
    } catch (error) {
        if (error.code === "ENOENT") {
            throw new Error("FS operation failed");
          } else {
              console.log(error);
          }
    } 
};

read();
