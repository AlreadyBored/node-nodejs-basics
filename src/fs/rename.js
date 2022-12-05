import fs from 'fs';

const rename = async () => {
    fs.access('./src/fs/files/properFilename.md', (err) => {
		if (err) {
            fs.rename('./src/fs/files/wrongFilename.txt', './src/fs/files/properFilename.md', function(err) {
                if (err) throw err;
                console.log('Rename complete!');
            });

		} else {
			console.log(new Error('FS operation failed'));
		}
	});
};

await rename();