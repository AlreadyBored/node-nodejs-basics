import fs from 'fs';
import path from 'path';
import utils from '../../utils/index.mjs';
import {OPERATION_FAILED} from '../../constants/fileNames.js';

const {
    checkIfDirExists,
    getPath
} = utils;

export const createFile = async (fileUrl, filesDir, fileName, fileText) => {
    const filePath = getPath(fileUrl, filesDir, fileName);

    if (await checkIfDirExists(filePath)) {
        throw new Error(OPERATION_FAILED);
    }

    return fs.writeFileSync(filePath, fileText);
};

export const copyDir = async (fileUrl, srcDir, distDir) => {
    const srcPath = getPath(fileUrl, srcDir);
    const distPath = getPath(fileUrl, distDir);

    if (
        !await checkIfDirExists(srcPath) ||
        await checkIfDirExists(distPath)
    ) {
        throw new Error(OPERATION_FAILED);
    }

    return copyDirectory(srcPath, distPath);
}

const copyDirectory = async (srcDir, distDir) => {
    let exists = fs.existsSync(srcDir);
    let stats = exists && fs.statSync(srcDir);
    let isDirectory = exists & stats.isDirectory();

    if (isDirectory) {
        fs.mkdirSync(distDir);
        return fs.readdirSync(srcDir).forEach((childItemName) => {
            copyDirectory(path.join(srcDir, childItemName), path.join(distDir, childItemName));
        });
    } else {
        return fs.copyFileSync(srcDir, distDir);
    }
};

export const removeFile = async (fileUrl, fileDir, fileName) => {
    const filePath = getPath(fileUrl, fileDir, fileName);
    const fileExists = await checkIfDirExists(filePath);

    if (!fileExists) {
        throw new Error(OPERATION_FAILED);
    }

    return fs.unlinkSync(filePath);
}

export const listFiles = async (fileUrl, filesDir) => {
    const filesDirPath = getPath(fileUrl, filesDir);
    const dirExists = await checkIfDirExists(filesDirPath);

    if (!dirExists) {
        throw new Error(OPERATION_FAILED);
    }

    return fs.readdir(filesDirPath, (err, files) => {
        files.forEach((fileName) => {
            console.log(fileName);
        })
    });
}

export const readFile = async (fileUrl, fileDir, fileName) => {
    const filePath = getPath(fileUrl, fileDir, fileName);

    if (!await checkIfDirExists(filePath, fileName)) {
        throw new Error(OPERATION_FAILED);
    }

    return fs.readFile(filePath, {encoding: 'utf-8'}, (err, fileData) => {
        if (!err) {
            console.log(fileData);
        }
    });
}

export const renameFile = async (fileUrl, fileToRename, fileRenamed) => {
    const fileToRenamePath = getPath(fileUrl, fileToRename.fileDir, fileToRename.fileName);
    const fileRenamedPath = getPath(fileUrl, fileRenamed.fileDir, fileRenamed.fileName);

    const [
        fileToRenameExists,
        fileFinalExists
    ] = await Promise.all([
        checkIfDirExists(fileToRenamePath),
        checkIfDirExists(fileRenamedPath)
    ]);

    if (!fileToRenameExists || fileFinalExists) {
        throw new Error(OPERATION_FAILED);
    }

    return fs.renameSync(fileToRenamePath, fileRenamedPath);

}