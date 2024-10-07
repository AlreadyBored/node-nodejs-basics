import { cp, unlink } from 'node:fs/promises';
import { join } from 'node:path';
import { ErrorToShow } from './libs.js';
import { pathToFiles } from './envs.js';

const fromFileName = join(pathToFiles, "wrongFileName.txt");
const toFileName = join(pathToFiles, "properFilename.md");

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