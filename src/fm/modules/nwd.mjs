import fs from 'fs';
import * as errors from './errors.mjs'

const handleNWDCommand = (inputArgs) => {
	switch (inputArgs[0]) {
		case 'up':
			process.chdir('..');
			break;
		case 'cd':
			process.chdir(inputArgs[1]);
			break;
		case 'ls':
			fs.readdir(process.cwd(), { withFileTypes: true }, (_, entries) => {
				const directory = entries.filter(entry => entry.isDirectory()).sort((a, b) => a.name.localeCompare(b.name))
					.map(entry => { return {
						'Name': entry.name, 'Type': 'directory'
					}});
				const files = entries.filter(entry => entry.isFile()).sort((a, b) => a.name.localeCompare(b.name))
					.map(entry => { return {
						'Name': entry.name, 'Type': 'file'
					}});
				console.table(directory.concat(files), ['Name', 'Type']);
			});
			break;
		default:
			console.log(errors.invalidInput);
	}
}

export { handleNWDCommand }