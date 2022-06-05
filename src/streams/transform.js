import {Transform} from "stream";

export const transform = async () => {
    const newData = new Transform({
        transform(chunk, encoding, callback) {
            const reversedData = chunk.toString().split('').reverse().join('');
            this.push(reversedData);
            callback();
        }
    })
    process.stdin.pipe(newData).pipe(process.stdout)
};
transform();