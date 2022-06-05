const path = require('path')
const fs = require('fs')
// в промисах не доконца разобрался
//

export const copy = async () => {

    // if exist folder TO
    const promise = new Promise((resolve, reject) =>{
        fs.mkdir(
            path.join(__dirname, 'files_copy'),
            function (err) {
                if (err) {
                    throw new Error("FS operation failed")
                } else {
                    resolve()
                }
            }
        )
    })

    // if exist folder FROM
    promise.then(() => {
        return new Promise((resolve, reject) => {
            fs.readdir(
                path.join(__dirname, 'files'),
                function (err, items) {
                    if (err) {
                        throw new Error("FS operation failed")
                    } else {
                        resolve(items)
                    }
                }
            )
        })
    })

        // READ and WRITE
        .then((items) => {
            items.forEach((item, index) => {

                fs.readFile(
                    path.join(__dirname, 'files', item),
                    function (err,data) {

                        fs.writeFile ( path.join ( __dirname, 'files_copy', item ),
                            data.toString(),
                            (err) => {
                                if (err) {
                                    throw new Error("FS operation failed")
                                }
                            })
                    }
                )
            })
        })
};