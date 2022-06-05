const rename = async () => {
  const fs = require('fs');
  const path = require('path');

  let wrongFilename = path.join(__dirname, './files/wrongFilename.txt');
  fs.readFile(wrongFilename, 'utf-8', function (err, data) {
    if (err) throw err;
    let newValue = data;
    fs.writeFileSync(
      path.join(__dirname, './files/wrongFilename.md'),
      newValue,
      function (err) {
        if (err) throw err;
        console.log('wrongFilename.txt no');
      }
    );

    fs.unlink(wrongFilename, (err) => {
      if (err) console.log(err);
    });
  });
};

rename();

