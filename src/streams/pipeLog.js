import { Transform } from 'node:stream';

const pipeLog = new Transform({
    transform(chunk, _, callback) {
        console.log(chunk.toString());
        callback(null, chunk.toString());
    },
});

export default pipeLog;
