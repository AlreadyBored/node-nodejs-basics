const create = async () => {
    const fs = require('fs');
    const data = 'I am fresh and young';

    fs.exists(`${__dirname}/files/fresh.txt`, (exists) => {
        if (exists) {
            console.error('FS operation failed: File already exists');
        } else {
            fs.writeFile(`${__dirname}/files/fresh.txt`, data, (err) => {
                if (err) {
                    throw `${err}`
                } else {
                    console.log('File has been created successfully');

                }
            })
        }
    }
    );
};

// await
create();
