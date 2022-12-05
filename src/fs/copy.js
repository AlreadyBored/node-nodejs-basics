import { access, cp } from 'fs'

const copy = async () => {
    // Write your code here 
    access('./src/fs/files__copy', function (error) {
        if (error) {
            cp('./src/fs/files', './src/fs/files__copy', { recursive: true }, err => {
                if (err) {
                    console.error(err)
                } else console.log('Directory was copied!')
            })
        } else console.log('FS operation failed')
    })

};

copy();