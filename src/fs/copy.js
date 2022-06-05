import fs from 'fs';

export const copy = async () => {
    const folderName = 'files';
    const newFolderName = 'files_copy';
    try {
        if (!fs.existsSync(folderName)) {
            throw new Error('FS operation failed');
        };

        if (fs.existsSync(newFolderName)) {
            throw new Error('FS operation failed');
        };

        await fs.readdir(folderName, (err, data) => {
            if (err) throw new Error();
            if (!fs.existsSync(newFolderName)) {
                fs.mkdirSync(newFolderName)
            };
            data.forEach((file) => {
                console.log(file);
                fs.copyFile(`${folderName}/${file}`, `${newFolderName}/${file}`, err => {
                    if (err) throw err;
                    console.log(`copy file ${file} to folder ${newFolderName}`);
                });
            })
        })
    } catch (error) {
        throw new Error(error);
    }
};

copy();
