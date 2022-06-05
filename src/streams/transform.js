import { Transform } from 'stream';

const reversSting = new Transform({
    transform(string) {
        let s = string.toString().split("").reverse().join("");
        this.push(s);
        process.exit()
    }
});

export const transform = async () => {
    // Write your code here 
    process.stdin.pipe(reversSting).pipe(process.stdout);
};