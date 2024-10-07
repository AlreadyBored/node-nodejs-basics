import { Transform } from 'node:stream';


const transform = async () => {

    const reversCreateStream = () => {
        return new Transform({
            transform(chunk, encoding, cb) {
                const inutStr = chunk.toString();
                let newString = "";
                for (var i = inutStr.length - 1; i >= 0; i--) {
                    newString += inutStr[i];
                }
                cb(null, newString + '\n');
            }
        })
    }

    const reversText = reversCreateStream();

    process.stdin.pipe(reversText).pipe(process.stdout);
};

await transform();