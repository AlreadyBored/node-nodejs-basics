import fs from 'fs'
const path = './src/fs/files/'
const file = 'fileToRemove.txt'




const remove = async () => {
    fs.unlink(path + file, (err) => {
        if (err) {
            console.error("FS operation failed", err)
        } else
            console.log("Removed")
    })
};

await remove();