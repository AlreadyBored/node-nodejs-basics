export const parseArgs = () => {
    // Write your code here 
    const flags = process.argv.slice(2);
    console.log(flags[0].slice(2) + " is " + flags[1]);
    console.log(flags[2].slice(2) + " is " + flags[3]);

}

parseArgs();