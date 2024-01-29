import  {Readable} from 'stream'
import process from 'process'
import fs from 'fs'

const path = "./src/streams/files/fileToRead.txt";

async function * generate() {
    
    if (!fs.existsSync(path))
        throw new Error("The path does not exist!!!");
    
    yield fs.readFileSync(path) + "";
}

const read = async () => { 
    const readable = Readable.from(generate());
    readable.on("data", (chunk) => {
        process.stdout.write(chunk);
    })
};

await read();
