import { pipeline, Transform} from "stream";

const reverse = new Transform({
    transform(chunk, encoding, callback){
        const string = chunk.toString().trim();
        const reversedString = string.split("").reverse().join("");
        callback(null, reversedString + "\n");
    },
});

const cliInput = process.stdin;
const cliOutput = process.stdout;

const transform = async () => {
   pipeline(
    cliInput,
    reverse,
    cliOutput,
    (error) => console.error(error)
   )
};

await transform();