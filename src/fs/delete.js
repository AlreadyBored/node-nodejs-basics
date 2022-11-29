import { join } from "path";
import { rm } from "fs/promises";
import { isFileOrFolderExist, throwFsError, BASE_PATH } from "./utils/fs.js";

const filePath = join(BASE_PATH, "fileToRemove.txt");

const remove = async () => {
    const isExist = await isFileOrFolderExist(filePath);

    if (!isExist) {
        throwFsError();
    }

    await rm(filePath);
};

await remove();
