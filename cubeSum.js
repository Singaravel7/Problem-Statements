let m = prompt("Enter a number")
let n = prompt("Enter another number")
let sum=0
if(m>n)
    console.log("0")
else    
{
    for(let i=m;i<=n;i++)
    {
        sum+=i*i*i;
    }
}
console.log(sum)
