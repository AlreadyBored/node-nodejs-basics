import {Transform, pipeline} from 'stream';

const transform = async () => {
    const {stdin, stdout} = process;

    const transformStream = new Transform(
        {
            transform(chunk, encoding, callback) {
                callback(null, stringMapPipe(chunk.toString()));
            }
        }
    )

    pipeline(
        stdin, transformStream, stdout, err => {
            if (err) {
                console.log(err);
            }
        }
    )
};

await transform();

function stringMapPipe(string) {
    return string.toUpperCase().split(' ').join("______");
}
