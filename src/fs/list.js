import fs from 'fs'
const list = async () => {
  if(!fs.existsSync('src/fs/files/')) throw new Error('FS operations failed')
  else fs.readdir('src/fs/files', (_, dir) => dir.forEach(x => console.log(x)));
};

await list();
