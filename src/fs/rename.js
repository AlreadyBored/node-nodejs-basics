import { cp, unlink } from 'node:fs/promises';
import { join } from 'node:path';
import { ErrorToShow } from './libs.js';

const fileDirectory = join(import.meta.dirname, '/files');
const fromFileName = join(fileDirectory, "wrongFileName.txt");
const toFileName = join(fileDirectory, "properFilename.md");

const rename = async () => {
    try {
        await cp(fromFileName, toFileName,
            { errorOnExist: true, force: false}
        );
        await unlink(fromFileName)
    } catch(error) {   
        let existingError = ErrorToShow[error.code];
        if (existingError) {
            throw new Error(existingError);
        }
        console.log(error)
    }
};

await rename();