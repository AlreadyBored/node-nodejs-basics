const remove = async () => {
  const fs = require('fs');
  const path = require('path');

  let fileToRemove = path.join(__dirname, './files/fileToRemove.txt');

  fs.unlink(fileToRemove, (err) => {
    if (err) console.log(err);
    else console.log('fileToRemove.txt was deleted');
  });
};

remove();

