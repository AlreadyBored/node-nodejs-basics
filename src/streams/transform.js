import { pipeline, Transform } from 'stream';

const transform = async () => {
  const myTransform = new Transform({
    transform(chunk, encoding, callback) {
      const reverse =
        chunk
        .toString()
        .replace(/\n/g, "")
        .split('')
        .reverse().join('')+'\n'
      callback(null, reverse);
    },
  })

  pipeline(process.stdin, myTransform, process.stdout, (error) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Pipeline Succesfull');
    }
  })
}

await transform();
