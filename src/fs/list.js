import { access, readdir } from 'fs'

const list = async () => {
    // Write your code here
    access('./src/fs/files', error => {
        if (error) {
            console.log('FS operation failed')
        } else {
            readdir('./src/fs/files', (err, files) => {
                files.forEach(file => {
                    console.log(file)
                })
            })
        }
    })

};

await list();