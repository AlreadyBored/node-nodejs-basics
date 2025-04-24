import * as fs from 'fs'

const remove = async () => {
    // Write your code here 
    const fileToBeDeleted = './src/fs/files/fileToRemove.txt'
        fs.rm(fileToBeDeleted, (err) => {
            if(err) {
                throw new Error('FS operation failed', { cause: err.message })
            } else {
                console.log('File deleted successfully')
            }
        })
};

await remove();