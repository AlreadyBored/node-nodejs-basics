import fs from 'node:fs';

const list = async () => {
    // Write your code here
    const folderPath = './src/fs/files'
    fs.access(folderPath, (err) => {
        if (err) {
            throw new Error('FS operation failed: ', { cause: err.message })
        }
        fs.readdir(folderPath, (err, files) => {
            if (err) {
                throw new Error('FS operation failed: ', { cause: err.message })
            } else {
                console.log('Files: ', files)
            }
        })
    })
};

await list();