const path = require ( 'path' )
const fs = require ( 'fs' )

export const create = async () => {
    // Write your code here
    fs.writeFile (
        path.join ( __dirname, 'files', 'fresh.txt' ),
        'I am fresh and young',
        (err) => {
            if (err) {
                throw new Error("FS operation failed")
            }
        }
    )
}