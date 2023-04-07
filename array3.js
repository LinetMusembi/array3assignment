// Write a function that accepts an array of strings and console.logs each element using a for loop.
function containArrays(arrays){
    for (let i = 0; i < arrays.length; i++) {
        console.log(arrays[i])
}
}
let arrays = ["JavaScript","kotlin","python"];
containArrays(arrays);


// Write a function that accepts an array of numbers and uses the forEach() method to console.log each
//  number multiplied by 2.
function numbers(num){
    num.forEach(num=>{
        console.log(num*2);
    })
    

}
const num = [5,10,30,40,50];
numbers(num);



// Write a function that takes in an array of numbers and consoles the first four items multiplied by 8 
// and the last two added by 5.Console the array with the new values

function x (o){
    for(let i = 0;i<4;i++){
        o[i]*=8;
    }
    for(let i = o.length-2; i< o.length;i++){
    o[i]+=5;
}
console.log(o)
}
o = [6,4,12,8,2,9]
x(o)



// Write a function that takes in the following array and use a while loop to iterate and break
//  when the item is equal to the fourth index
let string = [1,2,3,4,5,5,6]
function strings(string){
    let i = 0;
    while(i<string.length){
        if(i === 4){
        break;
    }
    console.log(string[i])
    i++

}

}
strings(string);

// Write a function that takes in a an array of strings and use a 
// continue statement when the item is at the second index
// let fruits= ['apple','plum','banana','strawberries','kiwi']
let sentence = ["apple","plum","banana","strawberries","kiwi"];
for(let i=0; i<sentence.length;i++){
    console.log(sentence[i]);
}
for(let i=0; i<sentence.length;i++){
    if(i === 3){
    continue;
    }
    console.log("continue",sentence[i]);
 }
