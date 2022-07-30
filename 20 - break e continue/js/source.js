// break e continue
// break
for (xanis = 13; xanis > 0; xanis--){
    console.log(xanis);
    
    if(xanis == 9) {
        break;
    }

}
console.log("break");


// continue
let number = 10;

while (number < 100){
    number += 10;

    if(number === 60 || number === 90){
        console.log("GET THE MUSIC!");
        continue;
    }

    console.log("testando continue:", + number); 
       
}