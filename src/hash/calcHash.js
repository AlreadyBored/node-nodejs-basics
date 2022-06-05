const crypto = require('crypto');
const fs = require('fs')
const path = require('path')

export const calculateHash = async () => {
    // Write your code here
    const file = fs.readFileSync(
        path.join(__dirname, 'files', 'fileToCalculateHashFor.txt')
    )

    const hash = crypto.createHash('sha256')
    hash.update(file)

    const hex = hash.digest('hex')

    return hex
};