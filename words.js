//program to print number of words in a string
let a="hello World.how are you ",c=1
a=a.trim()
for(i=0;i<a.length;i++)
{
    if(a[i]==' '||a[i]=='.'||a[i]==',')
        c++
}
console.log("number of words : "+c)