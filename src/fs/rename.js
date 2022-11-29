import { rename as renameFile } from "fs/promises";
import { join } from "path";
import { BASE_PATH, isFileOrFolderExist, throwFsError } from "./utils/fs.js";

const oldPath = join(BASE_PATH, "wrongFilename.txt");
const newPath = join(BASE_PATH, "properFilename.md");

const rename = async () => {
    const isOldFileExist = await isFileOrFolderExist(oldPath);
    const isNewFileExist = await isFileOrFolderExist(newPath);

    if (!isOldFileExist || isNewFileExist) {
        throwFsError();
    }

    await renameFile(oldPath, newPath);
};

await rename();
