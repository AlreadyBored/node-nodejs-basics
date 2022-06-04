import { Transform, pipeline } from 'stream';

export const transform = async () => {
  const readStrm = process.stdin;
  const writeStrm = process.stdout;

  const tForm = new Transform({
    transform(chunk, enc, call) {
      const transformedText = [...String(chunk).trim()].reverse().join('');

      call(null, `${transformedText}\n\n`);
    },
  });

  pipeline(readStrm, tForm, writeStrm, (e) => console.error(e.message));
};

transform();
