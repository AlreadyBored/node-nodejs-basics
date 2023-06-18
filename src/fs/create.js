import * as fs from "node:fs";

const filePath = "src/fs/files/fresh.txt";
const fileContent = "I am fresh and young";
const errorMessage = "FS operation failed";

const create = async () => {
    fs.writeFile(filePath, fileContent, { flag: "wx" }, (err) => {
        if (err) {
            throw new Error(errorMessage);
        }
    });
};

await create();
