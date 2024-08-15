//program to find substring found or not
let prompt=require("prompt-sync")()
let a=prompt("Enter the string : ")
let s=prompt("Enter the substring : ")
if(a.includes(s))
{
console.log("Substring found in given string")
}
else
console.log("Substring not found in given string")