import { mkdir } from "fs/promises";
import {
    getPath,
    copyFilesToFolder,
    isFileOrFolderExist,
    throwFsError,
    BASE_PATH,
} from "./utils/fs.js";

const duplicateFolderPath = getPath("fs", "copy_files");

const copy = async () => {
    const isFolderExist = await isFileOrFolderExist(BASE_PATH);
    const isDuplicateFolderExist = await isFileOrFolderExist(
        duplicateFolderPath
    );

    if (!isFolderExist || isDuplicateFolderExist) {
        throwFsError();
    }

    await mkdir(duplicateFolderPath);
    await copyFilesToFolder(BASE_PATH, duplicateFolderPath);
};

await copy();
