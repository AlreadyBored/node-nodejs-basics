import { argv } from 'node:process'

const parseArgs = () => {
    // Write your code here

    const args = argv.filter((it, index) => (index > 1))
    .map((it, index) => (index % 2 === 0) ? `${it.slice(2)} is` : it)
    .map((it, index) => {
        if ((index % 2 !== 0) && (index !== argv.length - 3)) {
            return `${it},`
        }
        return it
    })
    .join(' ')

    console.log(args)

};

parseArgs();