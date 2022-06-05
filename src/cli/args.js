export const parseArgs = () => {
    // Write your code here 
    const data = process.argv;

    let localData;
    for (let index in data) {
        if (index > 1) {
            (data[index].startsWith('--')) ?
                localData = data[index] :
                console.log(localData + ' is ' + data[index]);
        }
    }
};

