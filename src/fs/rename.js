import fs from 'node:fs/promises'

const rename = async () => {
  await fs.rename('./files/wrongFilename.txt','./files/properFilename.md')
};

await rename().catch((err)=>console.error('FS operation failed'));