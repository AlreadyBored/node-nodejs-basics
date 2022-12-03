import fs from "fs/promises";
import path from "path";

const isExist = async (path) => {
    return await fs.stat(path)
        .then((res) => {
            return !!res;
        })
        .catch(() => false )
}

const createFile = async (path, data) => {
    await fs.writeFile(path, data)
}

const createFolder = async (path) => {
    await fs.mkdir(path)
}

const copyFiles = async (src, dest, files) => {
    for (const fileName of files) {
        const oldPath = path.join(src, fileName)
        const newPath = path.join(dest, fileName)
        await fs.copyFile(oldPath, newPath)
    }
}

export { isExist, createFile, createFolder, copyFiles };