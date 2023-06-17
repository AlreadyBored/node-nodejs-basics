let fs = require('fs');
let dir = './src/fs/files/fresh.txt'


const create = async () => {
  if (fs.existsSync(dir)) {
    console.log(new Error('FS operation failed'))
  } else {
    fs.writeFileSync(dir, 'I am fresh and young',)
  }
};

create();