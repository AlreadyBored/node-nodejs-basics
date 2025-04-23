import * as fs from 'fs/promises';

const copy = async () => {
    // Write your code here 
    const pathFrom = './src/fs/files'
    const pathTo = './src/fs/files_copy'
    console.log(pathFrom)
    try {
        await fs.cp(pathFrom, pathTo, { recursive: true, force: false, errorOnExist: true})
    } catch (error) {
        console.log('Error: FS operation failed:', error)
    }
};

await copy();
