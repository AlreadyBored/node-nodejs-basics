import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { access, readdir, readFile, appendFile } from "fs/promises";

export const rootDir = join(dirname(fileURLToPath(import.meta.url)), "../..");

export const getPath = (...paths) => join(rootDir, ...paths);

export const BASE_PATH = join(rootDir, "fs", "files");

export const getAllFilesFromDirectory = async (path) => readdir(path);

export const throwFsError = () => {
    throw new Error("FS operation failed");
};

export const copyFilesToFolder = async (source, destination) => {
    const files = await getAllFilesFromDirectory(source);
    for (const file of files) {
        const content = await readFile(join(source, file));
        await appendFile(join(destination, file), content);
    }
};

export const isFileOrFolderExist = async (path) => {
    try {
        await access(path);
        return true;
    } catch {
        return false;
    }
};
