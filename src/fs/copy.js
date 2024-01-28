import { readdir, mkdir, copyFile } from 'node:fs/promises';

const errorMessage = 'FS operation failed';

const filesPath = new URL('files', import.meta.url);
const filesCopyPath = new URL('files_copy', import.meta.url);

const copy = async () => {

    try{
        await mkdir(filesCopyPath);
        const filesContent = await readdir(filesPath);

        filesContent.forEach(async function(fileName) {

            var filePath = new URL(`files/${fileName}`, import.meta.url);
            var fileCopyPath = new URL(`files_copy/${fileName}`, import.meta.url);

            await copyFile(filePath, fileCopyPath);
        });

        console.log('Folder copied');
        
    } catch (err) {
        throw new Error (errorMessage);
    }

};

await copy();
