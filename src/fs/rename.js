import { constants, access, rename as renameFile } from 'fs';

const FILE_INITIAL = './files/wrongFilename.txt';
const FILE_RENAMED = './files/properFilename.md';
const FS_OPERATION_ERROR = 'FS operation failed';

export const rename = async () => {
    access(FILE_INITIAL, constants.F_OK, (err) => {
        if (err !== null) {
            throw new Error(FS_OPERATION_ERROR);
        }

        access(FILE_RENAMED, constants.F_OK, (err) => {
            if (err === null) {
                throw new Error(FS_OPERATION_ERROR);
            }

            renameFile(FILE_INITIAL, FILE_RENAMED, (error) => {
                if (error) {
                    console.error(error)
                }

                console.log(`File was renamed successfully to ${FILE_RENAMED}`);
            });
        });
    });
};

rename();
