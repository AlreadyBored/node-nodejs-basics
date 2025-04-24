import { Transform } from "stream";

const transform = async () => {
    
  const transformToUpp = new Transform({
    transform(chunk, _, callback) {
      const upperChunk = chunk.toString().toUpperCase();
      callback(null, upperChunk);
    },
  });

  process.stdin.pipe(transformToUpp).pipe(process.stdout);
};

await transform();
