import { access, constants, readFile } from 'fs';

const ENCODING_TYPE = 'utf8';
const FILE_TO_READ = `./files/fileToRead.txt`;
const FS_OPERATION_ERROR = 'FS operation failed';

export const read = async () => {
    access(FILE_TO_READ, constants.F_OK, (err) => {
        if (err !== null) {
            throw new Error(FS_OPERATION_ERROR);
        }

        readFile(FILE_TO_READ, ENCODING_TYPE, (error, data) => {
            if (error) {
                console.error(error)
            }

            console.log(data);
        })
    });
};

read();
