import { access, constants, writeFile } from 'fs';

const FILE_NAME = 'fresh.txt';
const FILE_CONTENT = 'I am fresh and young';
const FS_OPERATION_ERROR = 'FS operation failed';

export const create = async () => {
    access(FILE_NAME, constants.F_OK, (err) => {
        if (err === null) {
            throw new Error(FS_OPERATION_ERROR);
        }

        writeFile(FILE_NAME, FILE_CONTENT, (error) => {
            if (error) {
                console.error(error)
            }

            console.log(`${file} was created successfully`);
        });
    });
};

create();
