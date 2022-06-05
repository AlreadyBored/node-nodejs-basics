import fs from 'fs';

export const create = async () => {
	const path = 'files/fresh.txt';

	fs.writeFile(
		'files/fresh.txt', 'I am fresh and young', function (error) {
			if (error) console.log('FS operation failed');
		}
	)

	if (fs.existsSync(path)) {
		console.log(new Error('FS operation failed'));
	}
};

create();