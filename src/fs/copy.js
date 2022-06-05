import { access, constants, readdir, mkdir, copyFile } from 'fs';

const SRC_DIR_NAME = `files`;
const DEST_DIR_NAME = `files_copy`;
const FS_OPERATION_ERROR = 'FS operation failed';

export const copy = async () => {
    // this solution can be simplified if use "cp" function. But for nodejs v16 this function has experimental status.

    access(SRC_DIR_NAME, constants.F_OK, (err) => {
        if (err !== null) {
            throw new Error(FS_OPERATION_ERROR);
        }

        access(DEST_DIR_NAME, constants.F_OK, (err) => {
            if (err !== null) {
                mkdir(DEST_DIR_NAME, (err) => {
                    if (err) {
                        throw err;
                    }
                });
            }

            readdir(SRC_DIR_NAME, (error, files) => {
                files.forEach(file => {
                    copyFile(`${SRC_DIR_NAME}/${file}`, `${DEST_DIR_NAME}/${file}`, (err) => {
                        if (err) {
                            throw err;
                        }

                        console.log(`${file} was copied successfully`);
                    });
                });
            });
        });
    });
};

copy();
