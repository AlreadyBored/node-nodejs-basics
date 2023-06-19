import { Transform } from 'stream';


const transform = async () => {
    const transformStream = new Transform({
        transform(chunk, encoding, callback) {
            let res = chunk.toString()
            let reverseData = res.split('').reverse().join('');
            this.push(`${reverseData} \n`)
            callback()
        }
    })

    process.stdin.pipe(transformStream).pipe(process.stdout)
    
};

await transform();