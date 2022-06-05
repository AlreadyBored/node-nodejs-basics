import { Transform } from "stream";

export const transform = async () => {
  try {
    const reverseTransform = new Transform({
        transform(chunk, _, cb) {
          cb(null, chunk.toString().split("").reverse().join(""))
        },
      });
      process.stdin.pipe(reverseTransform).pipe(process.stdout)
  } catch (error) {
      throw new Error("Error")
  }
}