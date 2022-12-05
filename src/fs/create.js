import fs from 'fs';

const urlPath = './src/fs/files/fresh.txt';

const create = async () => {
    fs.access(urlPath, (err) => {
		if (err) {
			fs.appendFile(urlPath, 'I am fresh and young ', (err) => {
				if (err) throw err;
            })

		} else {
			console.log(new Error('FS operation failed'));
		}

	});

};

await create();