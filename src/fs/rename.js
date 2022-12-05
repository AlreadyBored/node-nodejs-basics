import fs from 'fs';

const rename = async () => {
    // Write your code here
    fs.access('files/wrongFilename.txt', (err) => {
        // err ? console.log('no') : console.log('yes');
        if (!err) {
					fs.access('files/wrongFilename.md', (err) => {
						if (err) {
							fs.rename('files/wrongFilename.txt', 'files/wrongFilename.md', (err) => {
								return err;
							})
						} else {
							throw Error ('FS operation failed');
						}
					});
        } else {
					throw Error ('FS operation failed');
				}
    })
};

await rename();