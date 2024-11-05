import { Transform, pipeline } from 'stream';

const myTransform = new Transform({
	transform(chunk, _, callback) {
		callback(null, chunk.reverse());
	},
});

function errorHandler(err) {
	console.error('[Error]:', err);
}

const transform = async () => {
	pipeline(process.stdin, myTransform, process.stdout, (err) => {
		if (err) errorHandler(err);
	});
};

await transform();
