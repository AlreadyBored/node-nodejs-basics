const parseArgs = () => {
    const argv = process.argv.slice(2)
    console.log(
    argv.reduce((acc, curr, i, arr )=>{
        if(curr.startsWith('--')) acc.push(`${curr.slice(2)} is ${arr[i+1]}`)
        return acc;
    },[]).join(', ')
    );
    // Write your code here 
};

parseArgs();