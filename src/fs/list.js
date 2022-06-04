import { access, constants, readdir } from 'fs';

const SRC_DIR_NAME = `files`;
const FS_OPERATION_ERROR = 'FS operation failed';

export const list = async () => {
    access(SRC_DIR_NAME, constants.F_OK, (err) => {
        if (err !== null) {
            throw new Error(FS_OPERATION_ERROR);
        }

        readdir(SRC_DIR_NAME, (error, files) => {
            files.forEach(file => {
                console.log(`- ${file}`);
            });
        });
    });
};

list();
