import {  access, constants, createWriteStream } from 'fs';

const FILE_TO_WRITE = `./files/fileToWrite.txt`;
const FS_OPERATION_ERROR = 'FS operation failed';

export const write = async () => {
    access(FILE_TO_WRITE, constants.F_OK, (err) => {
        if (err !== null) {
            throw new Error(FS_OPERATION_ERROR);
        }
    });

    const stream = createWriteStream(FILE_TO_WRITE);

    process.stdin.pipe(stream);

    process.stdin.on('end', function() {
        process.stdout.write('Stream ended.');
    });
};

write();
