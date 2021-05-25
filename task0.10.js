const common=(str1, str2)=>{
    //const vowels = str2;
    let output =[];
    for(let i=0;i<str1.length;i++){
        if (str2.includes(str1[i])){
            output.push(str1[i]);
        }

    }
    return console.log("Common Letters:" + output)
}
common("house", "computers");