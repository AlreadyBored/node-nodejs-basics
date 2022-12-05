import { Transform, pipeline } from 'stream';

const transform = async () => {
	const input = process.stdin;
	const output = process.stdout;
	const reverseStr = new Transform({
		transform(data, _enc, cb) {
			this.push(`${data.toString().trim().split('').reverse().join('')}\n`);
			cb();
		},
	});
	pipeline(input, reverseStr, output, err => {
		if (err) throw new Error('Operation failed');
	});
};

await transform();
