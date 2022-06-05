import { createHash } from 'crypto';
import { access, constants, readFile } from 'fs';

const ENCODING_TYPE = 'utf8';
const FILE_TO_READ = `./files/fileToCalculateHashFor.txt`;
const FS_OPERATION_ERROR = 'FS operation failed';

export const calculateHash = async () => {
    access(FILE_TO_READ, constants.F_OK, (err) => {
        if (err !== null) {
            throw new Error(FS_OPERATION_ERROR);
        }

        readFile(FILE_TO_READ, ENCODING_TYPE, (error, data) => {
            if (error) {
                console.error(error)
            }

            console.log(createHash('sha256').update(data).digest('hex'));
        })
    });
};

calculateHash();
