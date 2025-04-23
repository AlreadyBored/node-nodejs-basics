import fs from 'fs';
const copy = async () => {
    // Write your code here 
    try {
        const isExists = fs.existsSync('./src/fs/files_copy')
        if (isExists) throw new Error('FS operation failed')
        fs.cpSync('./src/fs/files', './src/fs/files_copy', {recursive:true},(err) => {
            if (err) throw new Error('FS operation failed')
        })
    } catch(err) {
        throw new Error('FS operation failed')
    }
};

await copy();
