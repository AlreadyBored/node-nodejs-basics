const read = async () => {
  const fs = require('fs');
  const path = require('path');

  let fileToRead = path.join(__dirname, './files/fileToRead.txt');

  let fileContent = fs.readFileSync(fileToRead, 'utf8');
  console.log(fileContent);
};

read();

