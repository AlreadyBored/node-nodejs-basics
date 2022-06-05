export const parseArgs = () => {
    let argsArray = process.argv;
    let outputString = "";
    for (let i = 2; i < argsArray.length; i++) {
        outputString = outputString.concat(`${argsArray[i].slice(2)} is ${argsArray[++i]} `);
    }
    console.log(outputString.slice(0,-1));
};