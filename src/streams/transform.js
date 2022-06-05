'use strict'

import { Transform } from 'stream'

class ReverseCharacters extends Transform {

  _transform(chunk, encoding, callback) {
    const reversed = Buffer.from(chunk.toString('utf-8').split(``).reverse().join(``))
    this.push(reversed);
    callback();
  }
}

export const transform = async () => {

  const reverseCharacters = new ReverseCharacters()
  process.stdin.pipe(reverseCharacters).pipe(process.stdout)

  // Write your code here 
};