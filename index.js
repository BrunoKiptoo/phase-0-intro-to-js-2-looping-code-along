// Code your solutions in this file
function writeCards(name, event){
    let message = [];
    for (let counter = 0; counter<name.length; counter++){
         console.log(`Thank you, ${name[counter]}, for the wonderful ${event} gift!`);
         message[counter]= `Thank you, ${name[counter]}, for the wonderful ${event} gift!`;
    }
    return message;
}

function countDown(){
    let count = 10;
    while(count>=0){
        console.log(count--);
    }
}
countDown();