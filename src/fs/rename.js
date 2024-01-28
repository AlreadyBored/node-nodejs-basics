const rename = async () => {
    const fs = require('fs');
    const path = require('path');

    const oldPath = path.join(__dirname, 'wrongFilename.txt');
    const newPath = path.join(__dirname, 'properFilename.md');
};

await rename();