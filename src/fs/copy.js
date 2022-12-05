import { promises as fs } from 'fs'


export const copy = async() => {
    const copy = (input, output) => {
        fs.copyFile(input, output).catch(() => {
            throw new Error('FS operation failed');
        });
    };
    fs.readdir('./files')
        .then((files) => {
            fs.mkdir('./files_copy')
                .then(() => {
                    files.forEach((el) => {
                        copy('./files/' + el, './files_copy' + el);
                    });
                    console.log('Copied complete!')
                })
                .catch((err) => {
                    console.log('FS operation failed ' + err);
                })
        })
        .catch((err) => {
            console.log('FS operation failed ' + err);
        });
};
copy();


