const { Transform } = require('stream');

const transformData = () => {
  return new Transform({
    transform(chunk, encoding, callback) {
      this.push(chunk.toString().toUpperCase()); 
      callback();
    }
  });
};

module.exports = { transformData };
