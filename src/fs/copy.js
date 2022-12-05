import fs from 'fs';

const copy = async () => {
    // Write your code here
    fs.access('files_copy', (err) => {
			if (err) {
				fs.mkdir('files_copy', (err) => {
					return err;
				});
				fs.access('files', (err) => {
					if (err) {
						throw Error('FS operation failed');
					}
					fs.readdir('files', (err, files) => {
						if (err) {
							return err;
						}
						files.forEach((file) => {
							fs.copyFile(`files/${file}`, `files_copy/${file}`, (err) => {
								return err;
							})
						})
					});
				})
			} else {
				throw Error('FS operation failed');
			}
	});
};

copy();