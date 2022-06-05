export const parseArgs = () => {
    const args = process.argv.slice(2)
    let str = ''
    for(let i = 0; i<args.length; i=i+2) {
        str += `${args[i].replace('--', '')} is ${args[i + 1]}, `
    }
    const newStr = str.trim().slice(0, -1)
    console.log(newStr)
};

parseArgs()