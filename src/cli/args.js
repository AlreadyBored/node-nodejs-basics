export const parseArgs = () => {
    const arr = process.argv.slice(2)
    const retArr = []
    let str = ''
    arr.map((e) => {
        if (e.slice(0, 2) === '--') {
            str = e.slice(2)
        } else {
            retArr.push(str + ' is ' + e)
            str = ''
        }
    })
    process.stdout.write(retArr.join('; ') + '\n')
}
