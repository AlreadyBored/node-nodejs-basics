import { unlink, access } from 'fs'

const remove = async () => {
    // Write your code here 
    access('./src/fs/files/fileToRemove.txt', error => {
        if (error) {
            console.log('FS operation failed')
        } else {
            unlink('./src/fs/files/fileToRemove.txt', err => {
                if (err) throw err
                console.log('./src/fs/files/fileToRemove.txt was deleted!')
            })
        }
    })
};

await remove();