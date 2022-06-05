import { cp } from 'fs/promises'

const COPY_ERROR_MESSAGE = 'FS operation failed';
const SOURCE_DIRECTORY_PATH = 'files';
const DESTINATION_DIRECTORY_PATH = 'files_copy';
const COPY_OPTIONS = {
    errorOnExist: true,
    force: false,
    recursive: true,
};

export const copy = async () => {
    try {
        await cp(
            SOURCE_DIRECTORY_PATH,
            DESTINATION_DIRECTORY_PATH,
            COPY_OPTIONS,
        ); 
    } catch {
        throw new Error(COPY_ERROR_MESSAGE);
    }
};
