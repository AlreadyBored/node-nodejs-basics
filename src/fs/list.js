const list = async () => {
    const fs = require('fs');
    const path = require('path');

    function listFiles() {
        const filesPath = path.join(__dirname, 'files');
        if (!fs.existsSync(filesPath)) { // if folder doesn't exist, then: next line
            throw new Error('FS operation failed');
        }
        const filenames = fs.readdirSync(filesPath);
        console.log(filenames);
    }

};

await list();

/* list.js - implement function that prints
* all array of filenames from files folder into console
* (if files folder doesn't exists Error with message
* FS operation failed must be thrown) */