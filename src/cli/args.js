const parseArgs = () => {
    // Write your code here 
    const parsed = process.argv.slice(2)
    let obj = {}
    for(let i=0; i<parsed.length; i+= 2){
        obj[parsed[i]] = parsed[i+1]
    }
    const mapped = Object.entries(obj).map(value => `${value[0].slice(2)} is ${value[1]}`).join(', ')
    console.log(mapped)


};

parseArgs();