import fs from 'fs'
import fsPromises from 'fs/promises'

const source = "./src/fs/files"

export const list = async () => {
    fs.access(source, function (err) {
        if (err) {
            try {
                throw new Error('FS operation failed')
            } catch (err) {
                console.error(err.message)
            }
        } else {
            fsPromises.readdir(source).
            then(files => {
                files.forEach(file => {
                    console.log(file);
                })
            })
        }
    })
};

await list();