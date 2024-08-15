//find number of occurences of given character
const prompt = require("prompt-sync")()
let s=prompt("Enter the string : ")
let t=prompt("Enter the character : ")
let c=0
s=s.toLowerCase()
t=t.toLowerCase()
if(s.includes(t))
{
    for(i=0;i<s.length;i++)
    {
        if(s[i]==t)
            c++
    }
    console.log('Number of occurences : '+c)
}
else
{
    console.log("Character not found in given string")
}


