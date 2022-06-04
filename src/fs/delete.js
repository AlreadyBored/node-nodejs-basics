import { constants, access, rm } from 'fs';

const FILE_TO_DELETE = './files/fileToRemove.txt';
const FS_OPERATION_ERROR = 'FS operation failed';

export const remove = async () => {
    access(FILE_TO_DELETE, constants.F_OK, (err) => {
        if (err !== null) {
            throw new Error(FS_OPERATION_ERROR);
        }

        rm(FILE_TO_DELETE, (error) => {
            if (error) {
                console.error(error)
            }

            console.log(`${FILE_TO_DELETE} was deleted successfully`);
        })
    });
};

remove();
