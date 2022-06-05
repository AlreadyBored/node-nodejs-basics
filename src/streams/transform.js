 const transform = async () => {
    process.stdin.on("data", function(dat){
        let res = dat.toString().split('');
        process.stdout.write( res.reverse().join('') )
    })
};
 export default transform();