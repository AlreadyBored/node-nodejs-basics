import fs from 'fs-extra';


export const copy = async () => {
    try {
        fs.exists('./files_copy', function (exists) {
            if (exists) {
                console.error('FS operation failed');
            } else {
                fs.copy('./files', './files_copy', err => {
                    if (err) {
                        console.error(err);
                    } else {
                        console.log('success')
                    }
                });
            }
        })
    } catch (err) {
        console.error('FS operation failed')
    }

};

copy()
