const transform = async () => {
  const { pipeline } = await import('node:stream/promises');
  const { Transform } = await import('node:stream');
  const { stdin, stdout } = await import('node:process');

  const myTrans = new Transform({
    transform(chunk, ecnoding, callback) {
      const str = chunk.toString();
      let newStr = ``;
      for (let i = str.length - 1; i > -1; i--) {
        newStr += str[i];
      }
      callback(null, `${newStr}\n`);
    },
  });
  try {
    await pipeline(stdin, myTrans, stdout);
  } catch {
    throw Error(`smth went wrong`);
  }
};
await transform();
