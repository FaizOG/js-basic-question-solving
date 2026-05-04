// Print Odd numbers

let UserInput = Number(prompt("Enter a Number."));

let i = 0;

while(i <= UserInput){
    if(i % 2 != 0){
        console.log(i);
        i++;
    }
    else{
        i++;
    }
}