import { pipeline, Transform} from "stream";

class RevertTransformPipe extends Transform {
    constructor(props) {
        super(props);
    }

    _transform(chunk, encoding, callback) {
        try {
            let text = chunk.toString('utf8').split('').reverse().join('');
            callback(null, text.trim() + '\n');
        } catch (err) {
            callback(err);
        }
    }
}


export const transform = async () => {
    process.stdin.setEncoding('utf8');

    pipeline(
        process.stdin,
        new RevertTransformPipe({}),
        process.stdout,
        (err) => {
            if (err) {
                console.log(err);
            }
        },
    )
};

transform();
