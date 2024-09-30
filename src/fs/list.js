import fs from 'fs'
 const path = './src/fs/files/'


const list = async () => {
    fs.readdir(path, (err,files) =>{
        if (err) {
            console.error('FS operation failed', err)
        } else {
            files.forEach(function(file) {
                console.log(file)
            })
            }
        }
    )
};

await list();