const transform = async () => {
    // Write your code here   
      const { Transform } = await import('stream');

      class ReverseStream extends Transform {
           _transform(chunk, encoding, callback) {
          const reversed = chunk.toString().split('').reverse().join('');
          this.push(reversed);
          callback();
        }
      }
      
      const reverseStream = new ReverseStream();
      console.log('Write some character og number in the Terminal!');
      console.log('Press enter and see input reversed!');
      console.log('Press CTRL+C to end the stream!');
      process.stdin.setEncoding('utf8'); 
      process.stdin.pipe(reverseStream).pipe(process.stdout);
};

await transform();