import { list } from "./list.js";
import { mkdir, copyFile } from 'node:fs/promises';
import { isTargetAccessible } from "./helpers/helperFunctions.js";
const copy = async (targetDirectory, copyDirectory) => {
    const filesToCopy = await list(targetDirectory);

    const [
        isTargetDirectoryExists,
        isCopyDirectoryExist,
    ] = await Promise.all([
        isTargetAccessible(targetDirectory),
        isTargetAccessible(copyDirectory)
    ]);

    if (isTargetDirectoryExists && !isCopyDirectoryExist) {
        await mkdir(copyDirectory, { recursive: true });

        const promises = [];

        filesToCopy.forEach((fileName) => {
            promises.push(copyFile(`${targetDirectory}/${fileName}`, `${copyDirectory}/${fileName}`));
        });

        // const projectFolder = new URL(newDirectory, import.meta.url); //TODO
        await Promise.all(promises);
        console.log('SUCCESSFULLY COPIED');
    } else {
        throw new Error('FS operation failed');
    }
};

copy('./files', './files_copy');
