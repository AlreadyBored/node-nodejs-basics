import {  access, constants, createReadStream } from 'fs';

const FILE_TO_READ = `./files/fileToRead.txt`;
const FS_OPERATION_ERROR = 'FS operation failed';

export const read = async () => {
    access(FILE_TO_READ, constants.F_OK, (err) => {
        if (err !== null) {
            throw new Error(FS_OPERATION_ERROR);
        }
    });

    const stream = createReadStream(FILE_TO_READ);

    stream.pipe(process.stdout);
};

read();
