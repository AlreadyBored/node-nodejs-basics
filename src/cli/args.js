export const parseArgs = () => {
    let result = []
    const myArgs = process.argv.slice(2)

    for(let i = 0; i<myArgs.length-1; i++){
       if (i%2==0){
        result.push(`${myArgs[i].replace('--','')} is ${myArgs[i+1]}`)
       }
    }
    console.log(result.join(', '));
};