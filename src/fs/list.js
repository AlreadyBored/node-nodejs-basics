const list = async () => {

    const fs = require('fs');

    fs.exists(`${__dirname}/files`, (exists) => {
        if (!exists) {
            console.error('FS operation failed: no such directory')
        } else {
            fs.readdir(`${__dirname}/files`, (err, files) => {
                if (err) {
                    console.error(err.message)
                } else {
                    console.log(files)
                }
            })
        }
    })
    // Write your code here 
};

// await 
list();