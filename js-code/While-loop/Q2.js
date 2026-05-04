// Print Every Even number.


let UserInput = Number(prompt("Enter a Number."));

let i = 1;

while(i <= UserInput){
    if(i % 2 === 0){
        console.log(i);
        i++;
    }
    else{
        i++;
    }
}