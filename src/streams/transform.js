import { Transform, pipeline } from 'node:stream';

const reverseTransform = new Transform({
  transform(chunk, _enc, callback) {
    // Reverse the chunk string and push
    const reversed = chunk.toString().split('').reverse().join('');
    this.push(reversed);
    callback();
  }
});

const transform = async () => {
  await new Promise((resolve, reject) => {
    pipeline(process.stdin, reverseTransform, process.stdout, (err) => {
      if (err) reject(err); else resolve();
    });
  });
};

try {
  await transform();
} catch (e) {
    console.error('Stream transform error:', e.message);
    process.exitCode = 1;
}
