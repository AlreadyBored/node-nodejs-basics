import { Transform, pipeline } from 'stream';

export const transform = async () => {
  const readaBle = process.stdin
  const writeBle = process.stdout
  
  const transform = new Transform({
    transform(chunk, enc, cb) {
      cb(chunk.toString().trim().split('').reverse().join('') + '\n')
    }
  })
  
  pipeline(
    readaBle,
    transform,
    writeBle,
    err => console.log(err)
  )
};

// transform()

