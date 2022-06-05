const copy = async () => {
  const fs = require('fs');
  const path = require('path');

  let fCopy = path.join(__dirname, 'files_copy');
  let file = path.join(__dirname, 'files');

  fs.access(fCopy, (err) => {
    if (err) {
      copy(file, fCopy);
    } else {
      console.log('FS operation failed');
      new Error('FS operation failed');
    }
  });

  let child = require('child_process');
  function copy(was, become) {
    was = was.replace(/\//gim, '\\');
    become = become.replace(/\//gim, '\\');
    child.exec('xcopy /y /q "' + was + '\\*" "' + become + '\\"');
  }
};

copy();

