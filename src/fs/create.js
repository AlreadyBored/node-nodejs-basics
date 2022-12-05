import fs from 'fs';

const create = async () => {
    // Write your code here
    fs.access('files/fresh.txt', (err) => {
			if (err) {
				fs.appendFile('files/fresh.txt', 'I am fresh and young', function (err) {
					if (err) throw err;
				});
			} else {
				throw Error('FS operation failed');
			}
    });
};

await create();