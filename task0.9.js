const vowel=(str)=>{
    const vowels=['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
    let output=[];
    for (let i=0;i<str.length;i++){
        if(vowels.includes(str[i])){
            output.push(str[i]);
        }
        
    }
    console.log("Vowels: " + output);
}
vowel('Abdallah');