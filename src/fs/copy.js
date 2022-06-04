import fs from 'fs'

export const copy = async () => {
    fs.readdir('./src/fs/files', (err, files) => {
        if(err) throw new Error('failed')

        fs.mkdir('./src/fs/files_copy', (err) => {
            if(err) throw new Error('files_copy')

            files.forEach((file) => {
                fs.copyFile(`./src/fs/files/${file}`, `./src/fs/files_copy/${file}`, (err) => {
                    if(err) throw new Error('failed 2')
                })
            })
        })
    })
};

copy()