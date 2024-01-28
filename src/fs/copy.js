import fs from 'node:fs';
import url from 'node:url';
import path from 'node:path';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filesPath = path.join(__dirname, 'files');
const filesPathCopy = path.join(__dirname, 'files-copy');

const copy = async () => {
    if (!fs.existsSync(filesPath) || fs.existsSync(filesPathCopy)) {
        throw new Error('FS operation failed');
    }

    fs.mkdirSync(filesPathCopy);

    fs.readdir(filesPath, { withFileTypes: false }, (err, files) => {
        if (err) {
            console.log('*** An error occurred while reading files ***');
            console.error(err);

            return;
        }

        if (!files.length) {
            console.log('*** No files were found while reading the target directory. Copy operation cannot be performed ***');
        }

        files.forEach((file) => {
            let initialFilePath = path.join(filesPath, file);
            let destinationFilePath = path.join(filesPathCopy, file);

            /**
             * 1st option of implementation of the method (preferred by async requirement)
             */

            fs.copyFileSync(initialFilePath, destinationFilePath, fs.constants.COPYFILE_EXCL, function (err) {
                if (err) throw err;

                console.log('*** Files copied successfully! ***'); // BUG not working
            });

            /**
             * 2nd option of implementation of the method
             */

            /* try {
                fs.copyFileSync(initialFilePath, destinationFilePath, fs.constants.COPYFILE_EXCL);

                console.log(`*** Copy operation completed successfully for ${file} ***`);
            } catch (error) {
                console.log('*** An error occurred while copying files ***');
                console.error(error);
            } */

            /**
             * 3rd option of implementation of the method
             * Known issues:
             * @param {object} errorOnExist - not working
             * @param {object} mode - not working
             */

            /* fs.cp(initialFilePath, destinationFilePath, { errorOnExist: true, mode: fs.constants.COPYFILE_EXCL }, function (err) {
                if (err) throw new Error(err);

                console.log('*** Copy operation completed successfully ***');
            }) */
        })
    })
};

await copy();
