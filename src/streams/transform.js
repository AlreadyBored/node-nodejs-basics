import{Transform, pipeline} from 'stream'


const transform = async () => {

    const input = process.stdin
    const output = process.stdout
    const transforms = new Transform({
        transform(chunk, enc, cb){
            const str = chunk.toString().trim()
            const reversed = str.split('').reverse('').join('')
            cb(null, reversed + '\n')            
        }
    })
    pipeline(
        input,
        transforms,
        output,
        err => {
            console.log('Err: ' + err)
        }
    )

    
};

await transform();