import process from 'node:process';

const parseArgs = () => {
    const args = process.argv.splice(2)
    const propArr = []
    const valueArr = []
    args.forEach((el, i) => {
        if (i % 2 === 0) {
            propArr.push(el)
        } else {
            valueArr.push(el)
        }
    })
    const newArr = propArr.map((el, i) => {
      return `${el} is ${valueArr[i]}`
    })
    console.log(newArr)
};

parseArgs();
