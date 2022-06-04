export const parseArgs = () => {
    let argsArr = process.argv.reduce(
        (acc,item, ind,main)=>{
            if(item.includes("--")) {
                return [...acc, item.slice(2) + " is " + main[main.indexOf(item) +1]]
            } else return acc
        },[]
    )
    console.log(argsArr.join(", "))
};
//parseArgs()