console.table([{"Food":"Pizza","price":500},{"Food":"Burger","price":250},{"Food":"Apple juice","price":100},{"Food":"Infused Chicken","price":1500}])
var total = 0
var ch
var ch2
do{
    ch = prompt("Enter your choice")
    switch(ch)
    {
        case "1":
            total+=500
            break
        case "2":
            total+=250
            break
        case "3":
            total+=100
            break
        case "4":
            total+=1500
            break
    }
    ch2 = prompt("Do you want to add any other item? if yes choose 1 else 0")
}while(ch2!=0);
if(total>=500)
{
    total = total- ((10/100)*total)
}
console.log(total)