//Reverse of String
let prompt=require("prompt-sync")()
let a=prompt("Enter the string : ")
let s=''
for(i=a.length-1;i>=0;i--)
{
    s=s+a[i]
}
console.log("Reverse of string : "+s)