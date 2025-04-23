import { Transform } from "node:stream";
import { stdout, stdin } from "node:process";
const transform = async () => {
    const reverse = new Transform({
        transform: function (data, enc, cb) {
            this.push(data.toString().trim().split("").reverse().join("") + "\n");
            cb();
        },
    });

    stdin.pipe(reverse).pipe(stdout);
};

await transform();
