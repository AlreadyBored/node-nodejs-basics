import { rename as renameFile} from 'node:fs/promises';
import { fileURLToPath } from "node:url";
import { dirname } from 'node:path';

const directoryPath = dirname(fileURLToPath(import.meta.url));

export const rename = async () => {

    const errorMessage = 'FS operation failed';

    try {
        await renameFile(`${directoryPath}/files/wrongFilename.txt`, `${directoryPath}/files/properFilename.md`);
    } catch (error) {
        throw new Error(errorMessage);
    }
};

rename();