const copy = async () => {

    const fs = require('fs');
    const path = require('path');

    fs.access(`${__dirname}/files`, fs.constants.F_OK, (err) => {
        console.log('\n> Checking if the files exists');

        if (err) {
            console.error('FS operation failed')
        } else {

            fs.access(`${__dirname}/files_copy`, fs.constants.F_OK, (err) => {

                console.log('\n> Checking if the files_copy exists');

                if (err) {
                    fs.mkdir(path.join(__dirname, 'files_copy'),
                        { recursive: true }, (err) => {
                            if (err) {
                                return console.error(err);
                            }
                            console.log('Directory Files_Copy created successfully!');
                        });

                    fs.cp(`${__dirname}/files`, `${__dirname}/files_copy`, { recursive: true }, (err) => {
                        if (err) {
                            console.error(err);
                        } else {
                            console.log('Copied successfully!')
                        }
                    });
                } else {
                    console.error('FS operation failed: Already exists')
                }
            });

        }
    });


};

// await 
copy();
