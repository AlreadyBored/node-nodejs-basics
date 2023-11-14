const remove = async () => {

    const fs = require('fs')
    fs.exists(`${__dirname}/files/fileToRemove.txt`, (exists) => {
        if (!exists) {
            console.error('FS operation failed: no such file')
        } else {
            fs.rm(`${__dirname}/files/fileToRemove.txt`, { recursive: true }, (err) => {
                if (err) {
                    console.error(err.message)
                    return
                }
                console.log('File deleted successfully');
            })
        }
    })
};

// await
remove();