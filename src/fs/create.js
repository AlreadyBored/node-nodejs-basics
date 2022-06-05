const create = async () => {
  const fs = require('fs');
  const path = require('path');
  console.log(path.join(__dirname, './files/fresh.txt'));
  try {
    if (!fs.existsSync(path.join(__dirname, './files/fresh.txt'))) {
      fs.writeFileSync(
        path.join(__dirname, './files/fresh.txt'),
        `I am fresh and young`,
        (error) => {
          error ? console.log(error) : null;
        }
      );
    } else {
      console.error('FS operation failed');
      new Error('FS operation failed');
    }
  } catch (err) {
    console.error(err);
  }
};

create();

