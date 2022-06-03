import { Transform, pipeline  } from "stream";

export const transform = async () => {
    const { stdin, stdout } = process;

    pipeline(
        stdin,
        new Transform({
            transform(chunk, encoding, callback) {
              callback(null, chunk.reverse() + '\n');
            },
        }),
        stdout,
        err => err ? console.error(err) : null
    );
};

transform();