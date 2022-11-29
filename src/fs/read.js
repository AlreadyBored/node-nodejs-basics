import { readFile } from "fs/promises";
import { join } from "path";
import { isFileOrFolderExist, throwFsError, BASE_PATH } from "./utils/fs.js";

const filePath = join(BASE_PATH, "fileToRead.txt");

const read = async () => {
    const isExist = await isFileOrFolderExist(filePath);

    if (!isExist) {
        throwFsError();
    }

    const content = await readFile(filePath, { encoding: "utf8" });
    console.log(content);
};

await read();
