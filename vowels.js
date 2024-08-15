//count vowels and consonents
let s="WElcome",c=0,c1=0
s=s.toLowerCase()
for(i=0;i<s.length;i++)
{
    if(s[i]=='a'||s[i]=='e'||s[i]=='i'||s[i]=='o'||s[i]=='u')
        c++;
    else
        c1++;
}
console.log('Number of Vowels : '+c)
console.log('Number of Consonents : '+c1)