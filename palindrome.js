//string palindrome or not
let a=" amMa ",s='',c=0
a=a.toLowerCase()
for(i=a.length-1;i>=0;i--)
{
    s=s+a[i]
}
console.log("Reverse of string : "+s)
for(i=0;i<a.length;i++)
{
    if(a[i]==s[i])
    {
        c++
    }
}
if(c==a.length)
{
    console.log("palindrome")
}
else{
    console.log("not palindrome")
}